//*Output in TRUE or FALSE */
//console.log(2 > 1) //greater than
//console.log(2 >= 1) //greater than or equal to
//console.log(2 < 1) //less than
//console.log(2 == 1) //equal to
//console.log(2 != 1) //not equal to

/*******String Comparison ********/
//we cannot compare 2 different datatype as the answer is unpredictable and not comparable
console.log("2" > 1)
console.log("02" > 1)

// as null is empty value
//it is unpredictable as it can be convert in NAN and sometimes in 0
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
    //comparison convert null to a number ==> 
    // 0 thats why [null>= 0] ==>true


//*****checking undefined**** 
// comparing undefined with value it will return false
console.log(undefined == 1)
console.log(undefined > 1)
console.log(undefined >= 1)

// strict check mean where we check "==="triple equal
//it strictly check the value and datatype also
console.log("2" === 2)