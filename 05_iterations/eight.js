const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// },0)
const myTotal = myNums.reduce((acc, currVal) =>  acc + currVal,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);