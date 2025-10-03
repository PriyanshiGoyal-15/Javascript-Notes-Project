//This keyword : Current Context(value)

const user = {
  username: "Priyanshi",
  price: "1500",

  welcomeMessage: function () {
    console.log(`${this.username} ,Welcome to website`);
    // console.log(this);
  }
}
//user.welcomeMessage()
//user.username = "Sneha" // We change the current context 
//user.welcomeMessage()
console.log(this);


/*
-- When we print This inside the scope :
Priyanshi ,Welcome to website
{
  username: 'Priyanshi',
  price: '1500',
  welcomeMessage: [Function: welcomeMessage]
}
Sneha ,Welcome to website
{
  username: 'Sneha',
  price: '1500',
  welcomeMessage: [Function: welcomeMessage]
}

-- But when we print This outside the scope:
{} It is empty object
  */


// Another code: 
// We basically cann't directly access this in the function 
// Without defining the variable(let username = "pruyanshi") you can see that their is prerequistics that is stored in the "This" by-default
function coffee() {
  let username = "priyanshi"
  console.log(this.username);
}
coffee()

// How we can declare function with Arrow
const chai = function () {
  let username = "priyanshi"
  console.log(this.username);
}  // this will give undefined
chai()

//Arrow function :(parameter) => {scope of the function// code goes here}
const tea = () => {
  let username = "priyanshi"
  console.log(this.username); //undefined
  console.log(this); //{} empty object

}
tea()

// Basic Arrow code
const addTwo = (num1, num2) => {
  return num1 + num2
}
console.log(addTwo(3, 4))

//Implicit Function mean we don't use curly brace{}. It bascially assume itself don't need to write retun
// You can wrap them in paranthesis() but if you use curly brace then it is necessary to write return keyword
const addFour = (num1, num2) => num1 + num2
const addFive = (num1, num2) => (num1 + num2)
console.log(addTwo(8, 4)) //12
console.log(addFive(6, 8)) //14

// Defing object in Implicit : Used paranthesis inside it you can use curly braces
const number = (num1, num2) => ({ username: "Priyanshi" })
console.log(number());  //{ username: 'Priyanshi' }

