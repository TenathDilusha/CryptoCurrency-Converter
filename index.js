import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const CryptoAPI = "https://api.coinpaprika.com/v1/tickers/";
const ExchangeKey = "0d97ccfc4326484749f72720d1fda19c";
const ExchangeAPI = `http://api.exchangeratesapi.io/v1/latest?access_key=${ExchangeKey}`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    //This gives value in EUR
    const result = await axios.get(ExchangeAPI);

      const result_btc = await axios.get(`${CryptoAPI}btc-bitcoin`);
      const result_eth = await axios.get(`${CryptoAPI}eth-ethereum`);
      const btc = result_btc.data["quotes"]["USD"]["price"];
      const eth = result_eth.data["quotes"]["USD"]["price"];
      const eur_to_lkr = result.data.rates.LKR;
      const eur_to_usd = result.data.rates.USD;
      const usd_to_lkr = eur_to_lkr / eur_to_usd;
      const rates = {
        USD_btc: Math.round(btc * 100) / 100,
        LKR_btc: Math.round(btc * usd_to_lkr * 100) / 100,
        EUR_btc: Math.round(btc / eur_to_usd * 100) / 100,
        USD_eth: Math.round(eth * 100) / 100,
        LKR_eth: Math.round(eth * usd_to_lkr * 100) / 100,
        EUR_eth: Math.round(eth / eur_to_usd * 100) / 100,
      }
    res.render("index.ejs", { rates });
  } catch (error) {
    res.render("index.ejs");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});