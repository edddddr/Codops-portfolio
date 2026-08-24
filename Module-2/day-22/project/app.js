const API = "https://open.er-api.com/v6/latest/ETB";

// Application State
const state = {
    rates: {},
    currency: "USD",
    watchlist: []
};

// DOM Elements
const statusEl = document.querySelector("#status");
const selectEl = document.querySelector("#currency");
const formEl = document.querySelector("#convert-form");
const amountEl = document.querySelector("#amount");
const resultEl = document.querySelector("#result");
const addBtn = document.querySelector("#watch");
const watchUl = document.querySelector("#watchlist");

// --- LocalStorage Persistence ---
function save() {
    localStorage.setItem("birr_watch_state", JSON.stringify({
        currency: state.currency,
        watchlist: state.watchlist
    }));
}

function load() {
    const saved = localStorage.getItem("birr_watch_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.currency) state.currency = parsed.currency;
            if (Array.isArray(parsed.watchlist)) state.watchlist = parsed.watchlist;
        } catch (err) {
            console.error("Failed to parse localStorage state:", err);
        }
    }
}

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

// --- Render Logic ---
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

function renderWatchlist() {
    if (state.watchlist.length === 0) {
        watchUl.innerHTML = `<li class="text-gray-400 italic text-sm py-2">No saved currencies.</li>`;
        return;
    }

    watchUl.innerHTML = state.watchlist.map(code => {
        const rate = state.rates[code] ?? "N/A";
        return `
            <li data-c="${code}" class="flex justify-between items-center py-2 px-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                <span class="text-sm font-medium text-gray-700">1 ETB = <strong class="text-blue-600">${rate}</strong> ${code}</span>
                <button class="rm bg-red-100 hover:bg-red-200 text-red-600 text-xs font-bold py-1 px-2 rounded transition-colors cursor-pointer" title="Remove">
                    ×
                </button>
            </li>
        `;
    }).join("");
}

// --- Event Handlers ---

// Currency Select Change
selectEl.addEventListener("change", (e) => {
    state.currency = e.target.value;
    save();
});

// Conversion Logic
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

// Remove from Watchlist (Event Delegation)
watchUl.addEventListener("click", (e) => {
    if (!e.target.matches(".rm")) return;

    const li = e.target.closest("li");
    const code = li.dataset.c;

    state.watchlist = state.watchlist.filter(item => item !== code);
    save();
    renderWatchlist();
});

// --- Startup ---
load();
loadRates();