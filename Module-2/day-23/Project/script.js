const MENU = [
  {
    id: "1",
    name: "Special Kitfo",
    category: "Mains",
    price: 450,
    desc: "Freshly minced beef seasoned with mitmita and niter kibbeh.",
    img: "🥩",
  },
  {
    id: "2",
    name: "Yetsom Beyaynetu",
    category: "Fasting",
    price: 280,
    desc: "Assorted lentils, chickpeas, and vegetable stews served on Injera.",
    img: "🫓",
  },
  {
    id: "3",
    name: "Doro Wat",
    category: "Mains",
    price: 550,
    desc: "Traditional slow-cooked chicken stew with boiled eggs.",
    img: "🍗",
  },
  {
    id: "4",
    name: "Shiro Tegabino",
    category: "Fasting",
    price: 220,
    desc: "Rich chickpea flour stew served boiling hot in a clay pot.",
    img: "🍲",
  },
  {
    id: "5",
    name: "Bedele Special Beer",
    category: "Drinks",
    price: 90,
    desc: "Chilled premium Ethiopian lager (330ml).",
    img: "🍺",
  },
  {
    id: "6",
    name: "Fresh Tej (Honey Wine)",
    category: "Drinks",
    price: 150,
    desc: "Traditional house-fermented honey wine.",
    img: "🍯",
  },
];

const DELIVERY_FEE = 100;
let cart = JSON.parse(localStorage.getItem("addis_eats_cart")) || [];
let trackerInterval = null;

const dishGrid = document.getElementById("dish-grid");
const emptyMenu = document.getElementById("empty-menu");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const cartItemsContainer = document.getElementById("cart-items");
const cartEmptyMsg = document.getElementById("cart-empty-msg");
const cartBadge = document.getElementById("cart-badge");
const subtotalEl = document.getElementById("subtotal-val");
const deliveryEl = document.getElementById("delivery-val");
const totalEl = document.getElementById("total-val");
const checkoutForm = document.getElementById("checkout-form");
const phoneInput = document.getElementById("phone-input");
const phoneError = document.getElementById("phone-error");
const addressInput = document.getElementById("address-input");

const cartContainer = document.getElementById("cart-container");
const trackerContainer = document.getElementById("tracker-container");
const trackOrderId = document.getElementById("track-order-id");
const trackAddress = document.getElementById("track-address");
const trackTotal = document.getElementById("track-total");
const resetOrderBtn = document.getElementById("reset-order-btn");

function renderMenu() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = MENU.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query);
    const matchesCat = category === "All" || item.category === category;

    return matchesQuery && matchesCat;
  });

  if (filtered.length === 0) {
    dishGrid.innerHTML = "";
    emptyMenu.classList.remove("hidden");

    return;
  }

  emptyMenu.classList.add("hidden");
  dishGrid.innerHTML = filtered
    .map(
      (item) => `
    <article class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <div class="text-4xl mb-2">${item.img}</div>
        <div class="flex justify-between items-start">
          <h3 class="font-bold text-gray-900 text-lg">${item.name}</h3>
          <span class="text-sm font-semibold bg-red-50 text-brandRed px-2 py-0.5 rounded">${item.price} ETB</span>
        </div>
        <p class="text-gray-500 text-sm mt-1 mb-4">${item.desc}</p>
      </div>
      <button class="w-full bg-brandYellow text-brandDark font-bold py-2 rounded-lg hover:bg-yellow-400 transition text-sm">
        + Add to Order
      </button>
    </article>
  `,
    )
    .join("");
}

renderCart();
