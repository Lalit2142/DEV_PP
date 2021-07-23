const fs = require("fs") ;

// main thing to remember in promise is , to the pending promise , first we need to attch two functions , they are success and failure which
// are in the form of then and catch 


let pendingPromise = fs.promises.readFile("./f2.txt") ;

console.log(pendingPromise) ;

// this is for a successful callback
pendingPromise.then(function(data){
    console.log("Inside scb") ;
    console.log(data) ;
    console.log(pendingPromise) ;
})


// this is for a failure callback

pendingPromise.catch( function(error){
    console.log("Inside fcb") ;
    console.log(error) ;
    console.log("---------------------------------") ;
    console.log(pendingPromise) ;
} )
