// MAP METHOD

// In this code we will add 10 in every number
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const number = myNumbers.map((num) => {
    return num + 10
})
//console.log(number); //[11, 12, 13, 14, 15,16, 17, 18, 19]


// For practice
// By FOR-EACH method we will add 10 in each method
const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const value = digit.forEach((item) => {
    console.log(item + 10);  //11 12 13 14 15 16 17 18 19
});

// By MAP method we will add 10 in each method
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const digi = digits.map((val1) => {
    return val1 + 10
})
console.log(digi); // [11,12,13,14,15,16,17,18,19]


// CHAINING IN JS
// mean we can use 2-3 method together in js 
const nums = [1, 2, 3, 4, 5, 6]
const newNums = nums
    .map((num) => num * 10) // multiply every num with 10 [10,20,30,40,50,60]
    .map((num) => num + 1) // after multiply +1 in every number [11,21,31,41,51,61]
    .filter((num) => num >= 40) // filter value who is greater than 40 [41,51,61]
console.log(newNums);
