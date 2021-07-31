// const fs = require("fs") ;

// let f1PendingPromise = fs.promises.readFile("./f1.txt") ;





// f1PendingPromise.then(function(data){
//     console.log(data+"") ;
//     let f2PendingPromise = fs.promises.readFile("./f2.txt") ;
//     f2PendingPromise.then(function(data){
//         console.log(data+"") ;
//         let f3PendingPromise = fs.promises.readFile("./f3.txt") ;
//         f3PendingPromise.then(function(data){
//             console.log(data+"") ;
//         })
//     })
// })


const fs = require("fs") ;

let f1PendingPromise = fs.promises.readFile("./f1.txt") ;


f1PendingPromise.then( function(data){
    console.log(data+"") ;
    console.log(f1PendingPromise) ;
    let f2PendingPromise = fs.promises.readFile("./f2.txt") ;

    f2PendingPromise.then(function(data){
        console.log(data+"") ;
        console.log(f2PendingPromise) ;
        let f3PendingPromise = fs.promises.readFile("./f3.txt") ;
        f3PendingPromise.then(function(data){
            console.log(data+"")
            console.log(f3PendingPromise) ;
        })
    })
} )

































