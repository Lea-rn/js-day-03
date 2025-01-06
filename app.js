// let x = "2000"; 
//  console.log(typeof x)

//  let convertion = Number(x)
//  console.log(typeof convertion)
// // convertion = convertion +10
// convertion+=10
// console.log(convertion)


// let age = 100 ; 
// console.log(typeof age)
// let convertionToString  = String(age)
// console.log(typeof convertionToString)

//////////////////////////////////////////

//// coersion ::: 

// const sentence = "i'm" + " "+ "100"+"20" + "year's old"   ===> + (string)
// console.log(sentence)

// const result = "20" - "10"   ===> - (number )
// console.log(result)

///// play guess the number :: 


// let n = "1"+1   
// console.log(n)  
// // n = n -1 
// n-= 1 
// console.log(n)  
// // n?  === > 10


// let x = 2 + 3 + 4 + "5" ; 
// console.log(x) ; 
// x?


// let y = "10" - "4" -"3" -2 + "5" 
// console.log(y)

// NaN ===> not a number
// let z = "hello"+"10"+"3"
// console.log(z)


///// equality operators : (== loose)  (=== strict) ::

// let age = "18" ; 

// == loose ==> value m3a value
/// === strict ==> value + type  ma3a value + type
// if (age == 18) {
// console.log("loose equality operator")
// }

// if (age === 18) {
//     console.log(" strict equality operator")
//     }


const favorite = Number(prompt("what's your favorite number !!! ")) 
console.log(favorite)

console.log(typeof favorite)

if (favorite === 13) {
    console.log(" 13 is great number !!")
}
else {
    console.log("wrong number !!! ")
}

