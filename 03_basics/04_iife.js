// immediately invoked function expressions (iife)

(function one(){
    console.log(`DB CONNECTED`);
})();

( (name)=>{
    console.log(`DB TWO CONNECTED ${name}`);
})("ayush")