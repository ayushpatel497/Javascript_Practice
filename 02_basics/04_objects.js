// const someUSer = new Object()
const someUSer = {}

someUSer.id = "123abc"
someUSer.name = "Anomy"
someUSer.isLoggedIn = false

// console.log(someUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "ayush",
            lastname: "patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

// users[1].email
// console.log(someUSer);
// console.log(Object.keys(someUSer));
// console.log(Object.values(someUSer));
// console.log(Object.entries(someUSer));
// console.log(someUSer.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "abhishek"
}

// course.courseInstructor
const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "ayush",
//     "courseName": "js in hindi",
//     "price": "free"
// }


