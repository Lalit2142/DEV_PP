const fs = require("fs") ;

let f1PendingPromise = fs.promises.readFile("./f1.txt") ;
let f2PendingPromise = fs.promises.readFile("./f2.txt") ;
let f3PendingPromise = fs.promises.readFile("./f3.txt") ;


f1PendingPromise.then(function(data){
    console.log("f1 data = "+data) ;
})

f1PendingPromise.catch(function(error){
    console.log(error) ;
})

f2PendingPromise.then(function(data){
    console.log("f2 data = "+data) ;
})

f2PendingPromise.catch(function(error){
    console.log(error) ;
})

f3PendingPromise.then(function(data){
    console.log("f3 data = "+data) ;
})

f3PendingPromise.catch(function(error){
    console.log(error) ;
})