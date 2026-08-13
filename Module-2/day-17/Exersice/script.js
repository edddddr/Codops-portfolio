// Funciton
// Rust Operator
// Arrow
// Closure
// Callback Function



const outer = (Name) => {

    let fname = 'Thomas'

    return () => {
        let lname = 'Alemu'

        return `${Name} ${fname} ${lname}`
    }
}



outer1 = outer("endrias")
inner = outer1()

console.log(inner)

// callback

const add10 = (number, callback) => {
   return callback(number)
}


const cal = number => number + 10

console.log(add10(200, cal))


