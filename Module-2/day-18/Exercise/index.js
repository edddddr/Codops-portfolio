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