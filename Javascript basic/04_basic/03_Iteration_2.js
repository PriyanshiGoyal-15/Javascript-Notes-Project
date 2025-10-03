
/**** WHILE LOOP ***/
// It will first check the condition then execute

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    //index++ // It will give 1 -10 number
    index = index + 2 // it will start with 0 and add 2 in index number till the 10
}

let MyArr = ["sam", "freen", "pak"]
let arr = 0
while (arr < MyArr.length) {
    console.log(`Value is ${MyArr[arr]}`);
    arr++

}

/**** DO - WHILE LOOP ***/
// It will first execute the code then check the condition

let number = 1
do {
    console.log(`Number is ${number}`);
    number++
} while (number <= 10);


let Name = ["SAM", "DAMM", "PHAM"]
let system = 0
do {
    console.log(`Data is  ${Name[system]}`);
    system++
} while (system < Name.length);
// output is : 
//Data is  SAM
//Data is  DAMM
//Data is  PHAM


let Surname = ["Singh", "Goyal", "Bansal"]
let data = 0
do {
    console.log(`Surname is : ${Surname[data]}`)
    data++
} while (data < Surname.length);
// output is :
//Surname is : Singh
//Surname is : Goyal
//Surname is : Bansal