const accountId = 498497
let accountEmail = "ayushpatel497@gmail.com"
var accountPassword = "987654"
accountCity = "Jabalpur"
let accountState;

// accountId = 2  // not allowed
accountEmail = "ahay@gmail.com"
accountPassword = "2121254"
accountCity = "Bengaluru"
console.log(accountEmail);

/*
Prefer not to use var 
becuase of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])