const userEmail = "a@gmail.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null defined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 //10
// val1 = undefined ?? 10 //10
// val1 = null ?? 10 ?? 20 // 10

//terniary operator
// condition ? true : false


console.log(val1);