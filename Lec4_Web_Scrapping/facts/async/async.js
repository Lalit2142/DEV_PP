const fs = require("fs") ;

console.log("start") ;

fs.readFile("./f1.txt",function(error,data){
    console.log(data+"") ;
})

console.log("end") ;

// while(true){
                    // ==> call back will never be executed , because call Stack will never be empty , and event loop will never allow
                    //     call back to enter into call Stack .
// }