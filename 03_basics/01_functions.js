function sayMyName(){
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}

// sayMyName()

function addTwoNumbers(num1,num2){
    let result = num1 + num2;
    return result
}

// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"));

function caculateCartPrice(...num1){
    return num1
}

console.log(caculateCartPrice(200,400,500))

const user = {
    username: "ayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username:"sam",
    price: 399
})