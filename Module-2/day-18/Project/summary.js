import {withVat} from "./pricing.js"
import orders from "./order.js"


// const total = orders.reduce((acc, cur) =>  cur.items.reduce((acc, {quantity, price}) => acc + quantity * price, 0), 0)
// console.log(total)

const total =  orders.map( order => (
    {...order,
     total: order.items.reduce((acc, {quantity, price}) => acc + quantity * price, 0)
    }
    )
);

const over_500 = total.filter(p => p.total > 500);


console.log(`Here is the orders with ther total ${total}`)

