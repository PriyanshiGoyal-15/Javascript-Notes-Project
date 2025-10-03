const coding = ["html", "css", "js", "react", "node.js", "git", "github"]
const values = coding.forEach((item) => {
    console.log(item);  // print the item of coding
});
console.log(values); //undefined

// FILTER 
//  This method used to filter the array which fulfill the condition
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const number = myNum.filter((num) => num > 5)  //output is :[ 6, 7, 8, 9, 10 ]
const number = myNum.filter((num) => {
    return num > 5; // here we start scope so with this we have to use return keyword
    //  num>5 by this it only return empty array
});
console.log(number);

// Filter example
const products = [
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Book", price: 2500, category: "Books" },
    { name: "Mouse", price: 300, category: "Electronics" },
    { name: "Shirt", price: 800, category: "Apparel" },
    { name: "T-Shirt", price: 750, category: "Apparel" },
    { name: "Keyboard", price: 1500, category: "Electronics" },
    { name: "Mouse", price: 500, category: "Electronics" },
    { name: "Book1", price: 550, category: "Books" },
    { name: "Book2", price: 850, category: "Books" },
];
const userProducts = products.filter((items) => {
    //return items // [it will print all item]
    //return items.price > 1000  //[it will print item price greater than 1000]
    //return items.category === 'Apparel' // [it will print whose category is Apparel]
    return items.category === 'Apparel' || items.category === 'Electronics' // [it will return the apparel and electronics item]
})
console.log(userProducts);

// fetching data with condition with For each loop and for condition we use if statement
// const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// digit.forEach((item) => {
//     if (item > 5) {
//         console.log(item);
//     }
// })

