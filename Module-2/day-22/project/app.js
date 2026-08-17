const API = "https://open.er-api.com/v6/latest/ETB";


const state = {
    rates: {},
    currency: "USD",
    watchlist: []
};


const statusEl = document.querySelector("#status");


// --- Fetch Rates ---
async function loadRates() {
    statusEl.textContent = "Loading rates...";
    statusEl.className = "text-center text-sm font-medium mb-4 text-blue-500";

    try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("HTTP " + res.status);

        const data = await res.json();
        state.rates = data.rates;
        
        statusEl.textContent = "Rates loaded successfully.";
        statusEl.className = "text-center text-sm font-medium mb-4 text-green-600";
        
        render();
    } catch (err) {
        statusEl.textContent = "Could not load rates. Check connection.";
        statusEl.className = "text-center text-sm font-medium mb-4 text-red-500";
    }
}