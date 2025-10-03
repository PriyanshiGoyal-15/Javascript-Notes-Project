// Strings are used to represent text and are enclosed in single quotes, double quotes, or backticks. 
const name = "Priyanshi-Goyal-BCA"
const repoCount = 50

// connect {value} with ${value}
console.log(name + repoCount + " value"); //outdated way

//just use backtick (`Write here the txt and for adding variable we use ${variable name}`);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern way

//object way of creating string
const gameName = new String('Priyanshi')
console.log(typeof gameName); //object 
console.log(gameName); // [String: 'Priyanshi']
//for accessing the key value
console.log(gameName[2]); //by changing number we can change which letter or number at the index we want to access

//prototype in string
console.log(gameName.__proto__); //it will show all the properties and methods of string. As it will show empty curly brace{} it mean it is an object.

//we have different methods of prototype in string
console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //PRIYANSHI 
console.log(gameName.charAt(2)); //in this we change the number to access the index value. It will return "i" at 2nd index

console.log(gameName.indexOf('i')); //in this we get to know the index of the letter we passed in the indexof method. It will return 2 as "i" is at 2nd index

const newString = gameName.substring(0, 4)
console.log(newString);  //here firstly www have to return starting-index and then ending-index.
//Strting index:0
//ending index:4
//it will return "Priy" of the string "Priyanshi" & it will not include the ending index value


const AnotherString = gameName.slice(0, 4)
console.log(AnotherString); //it will also return "Priy" of the string "Priyanshi" & it will not include the ending index value but in slice we can also use negative index.

//trim method in string
const NewstringOn = "   priyanshi  " //it will show the extra spaces also.
console.log(NewstringOn)
console.log(NewstringOn.trim()); // but it will remove the extra white spaces from starting and ending of the string

//replace method in string
const url = "www.priyanshi.com"
console.log(url.replace('priyanshi', 'google'))//it will replace the priyanshi with google

console.log(url.includes('priyanshi')) //it will return true if the string is present in the url otherwise false
console.log(url.includes('nisha')) //false now it is not present in the url


//convert string to array
console.log(name.split('-'));//it will convert the string into array by splitting it from where we put the '-' hyphen
//output will be [ 'Priyanshi', 'Goyal', 'BCA' ]