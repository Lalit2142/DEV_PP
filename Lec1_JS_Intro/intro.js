console.log("print on console") ;

// ES6 --> use only let , const

let a = 10 ;
console.log(a) ;

// data types in JS ==> number , boolean , string , undefined , object ==> these 5 are most commonly used

let b = false ;

console.log(b) ;


// Objects ==> collection of key value pairs

let cap = {
    name : "Steve",
    friends : ["tony","nat","thor","bruce"] ,
    place : "Queens",
    values : [
        1,false,{},"hey"
    ]
}

console.log(cap) ;

// 2 ways to access key from objects

// 1. using dot notation

console.log(cap.name) ;

// 2. using square bracket notation

console.log(cap["friends"]) ;

//Arrays

let fruits = ["apple","banana","mango"] ;

console.log(fruits[2]) ;

let values = [1,false,{},"hey"] ;

console.log(values) ;

// to get all the keys of objects ==> use for in loop

for(let key in cap){
    console.log(key) ;
}