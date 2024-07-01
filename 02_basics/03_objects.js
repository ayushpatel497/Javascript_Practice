// singleton 

// Object.create
// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ayush",
    "Full Name": "Ayush Patel",
    age: 22,
    [mySym]: "mykey1",
    location: "Jabalpur",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email) // not good method
// console.log(jsUser["name"])
// console.log(jsUser["Full Name"])
// console.log(jsUser[mySym])

// Object.freeze(jsUser) // freeze to make object unchangable

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());