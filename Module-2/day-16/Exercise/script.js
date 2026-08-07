let bill = 200;
let num_p = 4;

let teleBirr = []
let CBE = []

let total_bill = bill / 4;

let total_amount = bill > 300 ? total_bill * 0.1 : total_bill * 0.05




console.log(`Total amount per-person: ${total_amount}`)


switch (method) {
    case 'telebirr':
        teleBirr.push(total_amount)
    break;
    case 'CBE':
        CBE.push(total_amount)
    break;
    default:
        console.log("Please choose a correct service provider")
 
}
