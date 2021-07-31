// facts about promises ->
// promisifed function always gives you a pending promise
// initial state of a promise is pending
// pending promise can only be resolved into states => fullfill or rejected
// then and catch can only be called on pending promise
// then attaches a succes callback function to the pending promise
// catch attaches a failure callback function to the pending promise

// then and catch also gives us a pending promise known as thenKaPromise
// then and catch are also async functions

// chaining

// const fs = require("fs") ;

// let f1Promise = fs.promises.readFile("./f1.txt") ;

// f1Promise.then(function(data){
//     console.log(data+"") ;
//     let f2Promise = fs.promises.readFile("./f2.txt") ;
//     return f2Promise ;
// })
// .then(function(data){
//     console.log(data+"") ;
//     let f3Promise = fs.promises.readFile("./f3.txt") ;
//     return f3Promise ;
// })
// .then(function(data){
//     console.log(data+"") ;
// })

const fs = require("fs") ;

let f1PendingPromise = fs.promises.readFile("./f1.txt") ;

let r2 = f1PendingPromise.then(function(data){
    console.log(data+"") ;
    let f2PendingPromise = fs.promises.readFile("./f2.txt") ;
    return f2PendingPromise ;
})
let r3 = r2.then(function(data){
    console.log(data+"") ;
    let f3PendingPromise = fs.promises.readFile("./f3.txt") ;
    return f3PendingPromise ;
})
let lastPendingPromise = r3.then(function(data){
    console.log(data+"") ;
})
lastPendingPromise.then(function(){
    console.log(lastPendingPromise) ;
    console.log("end") ;
})

































