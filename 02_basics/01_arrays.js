//array

const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "bahubali"]

const myArray2 = new Array(1,2,3,4,5)
console.log(myArray[1]);

// array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(8)
// myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))

// const newArray = myArray.join() // convert to comma separated string
// console.log(myArray);
// console.log(typeof newArray);

// slice , splice
console.log("A ", myArray);
const myNewArr1 = myArray.slice(1,3)

console.log(myNewArr1);
console.log("B ",myArray);

const myNewArr2 = myArray.splice(1,3)
console.log("C ",myArray);

console.log(myNewArr2);