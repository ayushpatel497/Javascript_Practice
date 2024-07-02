const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key);
}

const program = ["js", "rb", "cpp", "java"]

for (const key in program) {
    console.log(program[key]);
}