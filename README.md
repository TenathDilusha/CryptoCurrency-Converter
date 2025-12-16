# 🚀 CryptoRate Hub

CryptoRate Hub is a web application that displays **live cryptocurrency values** for popular cryptocurrencies such as **Bitcoin (BTC)** and **Ethereum (ETH)** in multiple currencies: **USD, LKR, and EUR**.

This project was developed as a **capstone project** using **Node.js, Express, Axios, and EJS**, demonstrating how to integrate and work with public APIs and present real-time data in a user-friendly interface.

---

## 📌 Features

* Live cryptocurrency prices
* Supported cryptocurrencies:

  * Bitcoin (BTC)
  * Ethereum (ETH)
* Supported currencies:

  * 🇺🇸 USD
  * 🇱🇰 LKR
  * 🇪🇺 EUR
* Real-time currency conversion
* Values rounded to 2 decimal places
* Clean and responsive UI
* Server-side rendering using EJS
* Graceful error handling

---

## 🛠 Technologies Used

* **Node.js** – Runtime environment
* **Express.js** – Web framework
* **Axios** – HTTP client for API requests
* **EJS** – Templating engine
* **CSS** – Styling
* **Body-parser** – Middleware for form handling

---

## 🔗 APIs Used

### 1️⃣ CoinPaprika API

Used to retrieve real-time cryptocurrency prices.

```
https://api.coinpaprika.com/v1/tickers
```

### 2️⃣ Exchange Rates API

Used to retrieve live exchange rates (EUR as the base currency).

```
https://exchangeratesapi.io
```

## ⚙️ How the Application Works

1. The **CoinPaprika API** provides cryptocurrency prices in USD.
2. The **Exchange Rates API** provides EUR-based currency exchange rates.
3. The application calculates:

   * USD → LKR
   * USD → EUR
4. All values are rounded to **two decimal places** for readability.
5. Data is passed from the Express server to the EJS template and rendered on the homepage.

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/crypto-rate-hub.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd crypto-rate-hub
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Server

```bash
nodemon index.js
```

Or

```bash
node index.js
```

### 5️⃣ Open in Your Browser

```
http://localhost:3000
```

---

## ⚠️ Error Handling

* API requests are wrapped in `try-catch` blocks
* Prevents crashes when APIs are unavailable
* Ensures smooth user experience even on request failures

---

## 📈 Future Improvements

* Add more cryptocurrencies (SOL, BNB, ADA, etc.)
* Allow users to select cryptocurrencies dynamically
* Add charts to visualize price trends
* Add dark/light mode toggle
* Improve mobile responsiveness
* Move API keys to environment variables

---

## 👨‍💻 Author

**Tenath Dilusha**
Computer Science & Engineering Student

---





