//{ } = scope [It can be used in function , loops,conditional statements. By this it is declaring the scope of the function] . In objects we use it but it is just for object declaration they both are different things
let a = 40
const b = 80
var c = 120
console.log(a)
console.log(b)
console.log(c)

// Block Scope : that is written inside the code{}
//Global Scope: that is written inside the outside of code

// let c = 300 it is global scope
// this is for understanding
if (true) { // Here the Block scope start 
    let A = 400
    const B = 800
    // var C = 1200
}// scope ends
// console.log(A); it will give error as it is executed outside the scope 
//console.log(B); it will give error as it is executed outside the scope 
//console.log(C); //But it will run so it the big issue


// undrstanding Block and global scope example
let q = 5000
if (true) {
    let q = 400
    const w = 500
    console.log("Block value : ", q); // it will print block scope
}
console.log("Global value : ", q); // it will give global scope

//***Nested Scope ***** bu function
function one() {
    const userName = "Priyanshi"

    function two() {
        const website = "github"
        console.log(userName);
    }
    // console.log(website); it will not run because it is outside it scope
    two()
}
one()

//by conditional statement
if (true) {
    const username = "priyanshi"
    if (username === "priyanshi") {
        const website = " github"
        console.log(username + website);
    }
    // console.log(website);it will not run because it is outside it scope
}
// console.log(username);it will not run because it is outside it scope


//****** Intersting Concept*******
//basic function
console.log(addOne(5));
function addOne(num) {
    return num + 1
}
// console.log(addOne(5));


// Function or Expression
//In this we can not access before declaration as the function is in variable
// console.log(addTwo(5))
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5))