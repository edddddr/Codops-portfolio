// by id — one element
const list = document.getElementById("list");

// CSS selector — FIRST match
const h1 = document.querySelector("h1");
// console.log(h1.textContent);

const li = document.querySelector(".item");


// CSS selector — ALL matches (NodeList)
const items = document.querySelectorAll(".item");
items.length; // 2

const qty = document.querySelector("#qty");
// console.log(qty.value)


// console.log(li.getAttribute("Class"))
// console.log(li.dataset.id)

// console.log(items)
items.forEach(item => item)
const name = [...items].map(item => item.textContent)


// console.log(name)

h1.textContent = "hello"
h1.classList.add("active")
h1.classList.remove("hidden")
h1.classList.toggle("done")

h1.style.color = "orange"
console.log(h1.textContent)