//we cann't use ForOf loop for object and array for those we use FORIN loop

// Put Forin in Object
const myobject = {
    'In': 'India',
    'USA': 'United State of India',
    'Fr': 'France'
}
for (const key in myobject) {
    // console.log(myobject[key]);
    console.log(`${key} shortcut is for ${myobject[key]}`);

}

// Put forIn in array
const myarr = [1, 2, 3, 4, 5]
for (const key in myarr) {
    console.log(myarr[key]);
}


// Map in FORIN loop , It is not iteratble
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF INDIA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")
for (const key in map) {
    console.log(map[key]);
}

// ***** FOR EACH LOOP ******
// for each loop by function
const lang = ["js", "css", "c++", "ruby", "swift"]
lang.forEach(function (item) {
    console.log(item);
})
/* js
css
c++
ruby
swift */

// for each loop by arrow function
const coding = ["html", "css", "js", "react", "node.js", "git", "github"]
coding.forEach((val) => {
    console.log(val);
})
/* html
css
js
react
node.js
git
github */

// Declare function then use foreach Loop
const name = ["sam", "pak", "fay"]
function printME(item) {
    console.log(item);
}
name.forEach(printME)
/* sam
pak
fay */


// We can accesss items, index, and whole arr(arr)
const country = ["INDIA", "USA", "FRANCE", "AUSTRALIA", "RUSSIA"]
country.forEach((item, arr, index) => {
    console.log(item, arr, index);

})
/* item - index  - arr[whole arr]
INDIA 0 [ 'INDIA', 'USA', 'FRANCE', 'AUSTRALIA', 'RUSSIA' ]
USA 1 [ 'INDIA', 'USA', 'FRANCE', 'AUSTRALIA', 'RUSSIA' ]
FRANCE 2 [ 'INDIA', 'USA', 'FRANCE', 'AUSTRALIA', 'RUSSIA' ]
AUSTRALIA 3 [ 'INDIA', 'USA', 'FRANCE', 'AUSTRALIA', 'RUSSIA' ]
RUSSIA 4 [ 'INDIA', 'USA', 'FRANCE', 'AUSTRALIA', 'RUSSIA' ]
*/

// Having object inside the array by foreach loop
const myCoding = [
    {
        langName: "javascript",
        langFile: "js",
    },
    {
        langName: "java",
        langFile: "java",
    },
    {
        langName: "pyhton",
        langFile: "py",
    },
]

myCoding.forEach((val) => {
    // console.log(val)  // got whole data of object
    //console.log(val.langFile) // got langfile
    console.log(val.langName); // got lang name




})