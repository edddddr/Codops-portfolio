# Birr Watch 🇪🇹💱

**Birr Watch** is a lightweight, responsive currency conversion web app built to track real-time exchange rates from Ethiopian Birr (ETB) to foreign currencies. Users can convert amounts instantly and maintain a personalized watchlist that persists across browser sessions.

---

## ✨ Features

* **Live Market Rates:** Connects directly to a open-access Exchange Rate API for up-to-date ETB conversion rates.
* **Instant Currency Conversion:** Converts custom ETB values into any available foreign currency with instant UI feedback.
* **Watchlist Management:** Allows users to pin select currency pairs to track their rates in a simple list.
* **State Persistence:** Keeps your selected currency and saved watchlist preserved using `localStorage` so choices survive page reloads.
* **Clean UI Feedback:** Clear visual states for data loading, success, input errors, and network issues.

---

## 🛠️ Tech Stack

* **HTML5** – Semantic layout & structure
* **Tailwind CSS v4** – Utility-first CSS framework (via CDN)
* **JavaScript (ES6+)** – Async/Await, Fetch API, DOM Manipulation, Event Delegation, LocalStorage

---

## 📁 Project Structure

```text
.
├── index.html   # Main application markup & structural framework
├── app.js       # Core logic (API handling, state, DOM rendering, localStorage)
├── style.css    # Custom CSS overrides (if applicable)
└── README.md    # Project documentation