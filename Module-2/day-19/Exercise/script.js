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

const creatd_li = document.createElement("li")

creatd_li.textContent = "shiro"
creatd_li.classList.add("item")
// console.log(creatd_li)

list.append(creatd_li)
list.prepend(creatd_li)


// const li = document.querySelector(".item");
// remove this element from the page
// li.remove();
// list.innerHTML = "";

const cart = [
    { name: "Teff", qty: 2 },
    { name: "Berbere", qty: 1 },
];

const render = () => {
    const list = document.getElementById("list");

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name}, price : ${item.qty}`;
        list.append(li);
    })
}

render();



const btn = document.getElementById("btn")


const handleClick = () => {
    cart.push({name: "Kitfo", qty: "3 kilo"})
    render();
}


btn.addEventListener('click', (e) => {
    handleClick()
    console.log(e.key)
    // console.log("clicked")
})