const cheerio = require("cheerio") ;

let ch = cheerio.load("./index.html") ;

// console.log(ch) ;

let pTags = ch("p").text ;

console.log("pTags are ",pTags) ;

