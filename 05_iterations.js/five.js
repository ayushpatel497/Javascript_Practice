const lang = ["js", "ruby", "java", "python"]

// lang.forEach(function (item) {
//     console.log(item);
// })
// lang.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// lang.forEach(printMe)

const myCoding = [
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"c++",
        langFileName:"cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})
