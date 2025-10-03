// REDUCE 
/* In this we have 3 main things :
 initial value = it is a starting value 
 accumulator = it is a initial value  [acc]
 current value = it is taken from array,objects [currval]
*/

// Basic method to understand
const mynum = [1, 2, 3]
const myTotal = mynum.reduce(function (acc, currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);

    return acc + currval

}, 0)
console.log(myTotal);

// by arrow function
const value = [1, 2, 3, 4]
const mysum = value.reduce((acc, currval) => {
    console.log(`acc : ${acc} and currval: ${currval}`);
    return acc + currval;
}, 10);
console.log(mysum); //10

// Shopping Cart
const shoppingCart = [
    {
        itemName: "js Course",
        price: 999,
    },
    {
        itemName: "py Course",
        price: 1999,
    },
    {
        itemName: "c++ Course",
        price: 3999,
    },
]
const add = shoppingCart.reduce((acc, item) => {
    return item.price + acc
}, 0);
console.log(add);
