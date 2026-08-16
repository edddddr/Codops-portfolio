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