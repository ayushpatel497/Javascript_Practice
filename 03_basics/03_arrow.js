const user = {
    username: "ayush",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()

// function one(){
//     let username = "ayush"
//     console.log(this.username);
// }

// one();

// const one = function(){
//     let username = "ayush"
//     console.log(this.username);
// }

// one()

// const one = () => {
//     let username = "ayush"
//     console.log(this.username);
// }

// one()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(3,4));

