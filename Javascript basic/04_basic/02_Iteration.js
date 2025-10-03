// Iteration ==> LOOPS

/*********for loop*********/
/* It excute the code number of times that we assign
syntax: 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

let index = 0 ==> Declaring the variable which value is 0 [Variable name according to you]
index < array.length ==> condition check which mean index have less length than array
index++ : increment
*/
for (let a = 0; a <= 10; a++) {
    const element = a
    console.log(element);
}

// use IF condition in For loop

for (let i = 1; i <= 5; i++) {
    const element = i
    if (element == 5) {
        console.log("Iteration Done");
    }
    console.log(element);
}
/*
1
2
3
4
Iteration Done
5 */

//If you want message should be print when loop  done

for (let b = 1; b <= 5; b++) {
    const element = b
    console.log(element);
    if (element == 5) {
        console.log("Iteration Done");
    }
}
/*
1
2
3
4
5
Iteration Done
*/

//LOOP inside another LOOP
for (let i = 0; i <= 5; i++) {
    console.log(`Outer Loop : ${i}`);

    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner Loop : ${j}`); 
        console.log(i + `*` + j + `=` + i * j); // Multiply the i and j value we get table
    }
}/*
Outer Loop : 0
0*0=0
0*1=0
0*2=0
0*3=0
0*4=0
0*5=0
Outer Loop : 1
1*0=0
1*1=1
1*2=2
1*3=3
1*4=4
1*5=5
Outer Loop : 2
2*0=0
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
Outer Loop : 3
3*0=0
3*1=3
3*2=6
3*3=9
3*4=12
3*5=15
Outer Loop : 4
4*0=0
4*1=4
4*2=8
4*3=12
4*4=16
4*5=20
Outer Loop : 5
5*0=0
5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
*/

// Assigning Array and run the loop

const MyArray = ["Ansh", "Sam", "Feen"]
console.log(MyArray.length); // 3
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);  //Ansh Sam Feen
}

//break and continue
// Break used in for loop to stop when we want 
// In this when 5 is detected it will stop the loop and don't move further
for (let index = 0; index <= 30; index++) {
    if (index == 5) {
        console.log(`5 is Detected`);
        break
    }
    console.log(`Value of i is ${index}`);
}

// Continue used to skip the one condition
// In this it skip the 5 condition and print the "5 is detected" and it continue the loop
for (let code = 0; code <= 30; code++) {
    if (code == 5) {
        console.log(`5 is Detected`);
        continue
    }
    console.log(`Value of i is ${code}`);
}

