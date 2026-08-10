// Funciton
// Rust Operator
// Arrow
// Closure



const outer = (Name) => {

    return () => {
        return Name
    }
}


outer1 = outer("endrias")
inner = outer1()

console.log(inner)