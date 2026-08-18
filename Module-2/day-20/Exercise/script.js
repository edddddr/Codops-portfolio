console.log("1 — take order");
// this finishes LATER, after 2 seconds
setTimeout(() => {
console.log("3 — food is ready");
}, 2000);
console.log("2 — serve next customer");
// prints: 1, 2, then 3


// "call this function when you are done"
function getOrder(id, callback) {
    setTimeout(() => {
        callback({ id, total: 240 }); // ETB
        }, 1000);
}
    
getOrder(7, (order) => {
    console.log(order.total);
});


const order = new Promise((resolve, reject) => {
    const ok = true;

    if (ok) resolve({ id: 7, total: 240 });
    else reject(new Error("kitchen closed"));
});

getOrder(7)
.then(order => {
console.log(order.total); // on success
})
.catch(err => {
console.log(err.message); // on failure
})
.finally(() => {
hideSpinner(); // always runs
});


// each then can RETURN a new promise
getUser(1)
.then(user => getOrders(user.id))
.then(orders => orders[0])
.then(first => console.log(first.total))
.catch(err => console.log("failed:", err));
// one catch handles errors from ANY step



// fire several requests at once
Promise.all([
    fetch("/api/menu"),
    fetch("/api/specials"),
    fetch("/api/hours"),
]).then(([menu, specials, hours]) => {
// all three are ready here
});


async function showOrder(id) {
// ...then await pauses for the promise
    const order = await getOrder(id);
    console.log(order.total);
    return order;
}

async function loadMenu() {
    try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        render(data);
    } catch (err) {
        showError("Could not load the menu");
    } finally {
        hideSpinner();
    }
}


async function getDishes() {

    const res = await fetch("/api/dishes");
    // fetch does NOT reject on 404 / 500

    if (!res.ok) {
        throw new Error("HTTP " + res.status);
    }

    const dishes = await res.json(); // parse
    return dishes;

}




const list = document.querySelector("#dishes");
    async function load() {
    list.innerHTML = "Loading...";

    try {
        const dishes = await getDishes();
        list.innerHTML = "";

        dishes.forEach(d => {
            const li = document.createElement("li");
            li.textContent = `${d.name} — ${d.price} ETB`;
            list.append(li);
        });
    } catch (err) {
        list.innerHTML = "Could not load dishes.";
    }
}

load();