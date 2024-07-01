const mrvlHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// mrvlHeros.push(dcHeros)
// const allHeros = mrvlHeros.concat(dcHeros)
// console.log(allHeros);

const allHeros = [...mrvlHeros, ...dcHeros]
// console.log(allHeros);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name:"Ayush"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));