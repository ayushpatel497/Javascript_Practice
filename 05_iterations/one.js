// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

let myArr = ["a","b","c"]

// break and continue

// for (let index = 0; index <=20 ; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 0; index <=20 ; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}