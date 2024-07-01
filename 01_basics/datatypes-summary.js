// // Primitive

// // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id==anotherId)


// // Non Primitive (Reference)

// // Array, Objects, Functions
// const heros = ["a","b","c"]
// let myObj = {
//     name: "ayush",
//     age:22
// }

// const myFunct = function(){
//     console.log("Hello World");
// }

// console.log(typeof myFunct)


// *********************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Ayush"
let anotherName = myName
anotherName = "Div"
console.log(myName)
console.log(anotherName)

let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "userTwo@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)