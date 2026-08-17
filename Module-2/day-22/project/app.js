const API = "https://open.er-api.com/v6/latest/ETB";


const state = {
    rates: {},
    currency: "USD",
    watchlist: []
};


const statusEl = document.querySelector("#status");
const selectEl = document.querySelector("#currency");
const formEl = document.querySelector("#convert-form");
const amountEl = document.querySelector("#amount");
const addBtn = document.querySelector("#watch");





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



formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const amt = Number(amountEl.value);

    if (!amt || amt <= 0) {
        resultEl.textContent = "Please enter a valid positive amount.";
        resultEl.className = "text-sm text-red-500 font-medium";
        return;
    }

    state.currency = selectEl.value;
    save();

    const rate = state.rates[state.currency];
    if (!rate) {
        resultEl.textContent = "Rate unavailable.";
        return;
    }

    const converted = (amt * rate).toFixed(2);
    resultEl.className = "text-xl font-semibold text-gray-800";
    resultEl.textContent = `${amt.toLocaleString()} ETB = ${converted} ${state.currency}`;
});



// Add to Watchlist
addBtn.addEventListener("click", () => {
    const code = selectEl.value;
    if (!code || state.watchlist.includes(code)) return;

    state.watchlist.push(code);
    save();
    renderWatchlist();
});
