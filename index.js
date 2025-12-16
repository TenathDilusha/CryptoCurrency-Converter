import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const CryptoAPI = "https://api.coinpaprika.com/v1/tickers/";
const ExchangeKey = process.env.EXCHANGE_API_KEY || "0d97ccfc4326484749f72720d1fda19c";
const ExchangeAPI = `http://api.exchangeratesapi.io/v1/latest?access_key=${ExchangeKey}`;

// Cache for API responses to reduce external calls
let ratesCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Configure axios with timeout
const axiosInstance = axios.create({
  timeout: 10000, // 10 second timeout
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Helper function to fetch rates with caching
async function fetchRates() {
  // Return cached data if still valid
  if (ratesCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
    console.log("Returning cached rates");
    return ratesCache;
  }

  console.log("Fetching fresh rates from APIs...");
  
  // Fetch all data in parallel for better performance
  const [exchangeResult, btcResult, ethResult] = await Promise.all([
    axiosInstance.get(ExchangeAPI),
    axiosInstance.get(`${CryptoAPI}btc-bitcoin`),
    axiosInstance.get(`${CryptoAPI}eth-ethereum`)
  ]);

  // Validate API responses
  if (!exchangeResult.data || !exchangeResult.data.rates) {
    throw new Error("Invalid exchange rate API response");
  }
  if (!btcResult.data || !btcResult.data.quotes || !btcResult.data.quotes.USD) {
    throw new Error("Invalid Bitcoin API response");
  }
  if (!ethResult.data || !ethResult.data.quotes || !ethResult.data.quotes.USD) {
    throw new Error("Invalid Ethereum API response");
  }

  const btc = btcResult.data.quotes.USD.price;
  const eth = ethResult.data.quotes.USD.price;
  const eur_to_lkr = exchangeResult.data.rates.LKR;
  const eur_to_usd = exchangeResult.data.rates.USD;
  
  // Validate rates are numbers
  if (!btc || !eth || !eur_to_lkr || !eur_to_usd) {
    throw new Error("Missing or invalid price data from APIs");
  }

  const usd_to_lkr = eur_to_lkr / eur_to_usd;

  const rates = {
    USD_btc: Math.round(btc * 100) / 100,
    LKR_btc: Math.round(btc * usd_to_lkr * 100) / 100,
    EUR_btc: Math.round((btc / eur_to_usd) * 100) / 100,
    USD_eth: Math.round(eth * 100) / 100,
    LKR_eth: Math.round(eth * usd_to_lkr * 100) / 100,
    EUR_eth: Math.round((eth / eur_to_usd) * 100) / 100,
  };

  // Update cache
  ratesCache = rates;
  cacheTimestamp = Date.now();
  
  return rates;
}

app.get("/", async (req, res) => {
  try {
    const rates = await fetchRates();
    res.render("index.ejs", { rates, error: null });
  } catch (error) {
    console.error("Error fetching cryptocurrency rates:", error.message);
    
    // Determine error type for better user feedback
    let errorMessage = "Unable to fetch live rates. Please try again later.";
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = "Request timeout. Please check your internet connection.";
    } else if (error.response) {
      errorMessage = `API Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      errorMessage = "Network error. Please check your internet connection.";
    }

    // Return cached data if available, otherwise show error
    if (ratesCache) {
      console.log("Returning stale cached data due to error");
      res.render("index.ejs", { rates: ratesCache, error: "Showing cached data. " + errorMessage });
    } else {
      res.render("index.ejs", { rates: null, error: errorMessage });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Visit http://localhost:${port} to view the app`);
});