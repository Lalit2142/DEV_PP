const fs = require("fs") ;

console.log("start") ;

let content = fs.readFileSync("./f1.txt","utf-8") ;
console.log(content) ;

console.log("end") ;