import format, { withVat, VAT }
from "./pricing.js";
format(withVat(480)); // "552.00 ETB"   

// Array's methods

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


const prices = [120, 200, 160];
// fold a list into ONE value
const total = prices.reduce((sum, p) => sum + p, 0); // 480


// methods return arrays → chain them
dishes.filter(d => d.veg).map(d => d.price).reduce((s, p) => s + p, 0); // 230



// Object 

const customer = {
    name: "Almaz Bekele",
    phone: "+251911234567",
    city: "Addis Ababa",
    member: true,
};

customer.name; // dot access
customer["phone"]; // bracket access
customer.member = false; // update
customer.email = "a@x.et";


const account = {
    owner: "Dawit",
    balance: 5000, // ETB
    deposit(amount) {
            this.balance += amount;
        return this.balance;
    },
};

account.deposit(1500); // 6500



const order = {
    id: 1042,
    customer: "Tigist Mengistu",
    items: [
        { name: "Tibs", qty: 2, price: 200 },
        { name: "Shiro", qty: 1, price: 120 },
    ],
};

order.items[0].name; // "Tibs"
order.items.length; // 2
order.items.reduce((s, i) => s + i.qty * i.price, 0);


const prices = { 
    tibs: 200, 
    shiro: 120 
};
// keys
for (const dish of Object.keys(prices)) {
    console.log(dish);
}


// key AND value together
for (const [dish, price] of Object.entries(prices)) {
console.log(`${dish}: ${price} ETB`);

}


const user = { name: "Hanna", city: "Bole" };
// pull keys into variables by name
const { name, city } = user;
name; // "Hanna" city; // "Bole"
// rename + default
const { name: who, member = false } = user;
// arrays destructure by POSITION
const [first, second] = ["Tibs", "Shiro"];


// copy an array (not a reference)
const menu = ["Tibs", "Shiro"];
const copy = [...menu, "Dulet"];

console.log(copy)
// merge arrays
const full = [...menu, "Firfir", "Buna"];
// copy + override object keys
const user = { name: "Eyob", city: "Piassa" };
const updated = { ...user, city: "Kazanchis" };


// rest in array destructuring
const [winner, ...others] = ["Almaz", "Dawit", "Hanna"];
winner; // "Almaz"
others; // ["Dawit", "Hanna"]
// rest in object destructuring
const { id, ...rest } = order;
// id pulled out, rest = everything else


const order = { customer: { name: "Sami" } };
// optional chaining — stop if missing
order.customer?.name; // "Sami"
order.payment?.method; // undefined
// ^ no crash, even though payment missing
// nullish coalescing — default only if
// null/undefined (NOT 0 or "")
const fee = order.fee ?? 60;


// named exports
export const VAT = 0.15;
export const withVat = n => n * (1 + VAT);
// default export (one per file)
export default function format(n) {
    return `${n.toFixed(2)} ETB`;
}