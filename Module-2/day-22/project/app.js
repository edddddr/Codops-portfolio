const API = "https://open.er-api.com/v6/latest/ETB";


const state = {
    rates: {},
    currency: "USD",
    watchlist: []
};


const statusEl = document.querySelector("#status");
const selectEl = document.querySelector("#currency");


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


function render() {
    // Populate Currency Dropdown
    const codes = Object.keys(state.rates);
    selectEl.innerHTML = codes
        .map(code => `<option value="${code}">${code}</option>`)
        .join("");
    
    // Restore user's previous selection if valid
    if (state.rates[state.currency]) {
        selectEl.value = state.currency;
    } else if (codes.length > 0) {
        state.currency = codes[0];
    }

    renderWatchlist();
}


