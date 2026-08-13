const menu = ['Doro Wat', 'Tibs', 'Shiro'];
menu[0]; // "Doro Wat" (zero-based)
menu.length; // 3
menu[menu.length - 1]; // last item
menu.push("Firfir"); // add to end
menu.pop(); // remove from end
menu.includes("Tibs"); // true
menu.indexOf("Shiro"); // 2


const prices = [120, 200, 160]; // ETB
// add 15% VAT to each — returns a NEW array
const withVat = prices.map(p => p * 1.15);
// [138, 230, 184]
// build labels for the screen
const labels = menu.map(d => ` ${d}`);



const dishes = [
    { name: "Tibs", price: 200, veg: false },
    { name: "Shiro", price: 120, veg: true },
    { name: "Misir", price: 110, veg: true },
];

// keep items where the test is true
dishes.filter(d => d.veg); // 2 items
dishes.filter(d => d.price < 150);

// first match only
dishes.find(d => d.name === "Shiro");