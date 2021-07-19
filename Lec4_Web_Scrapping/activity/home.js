const cheerio = require("cheerio") ;
const fs = require("fs") ;
const request = require("request") ;


let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595 ";

request(url,cb) ;

function cb(error , response , body){
    // fs.writeFileSync("./data.html",body) ;
    parseBody(body) ;
}


function parseBody(body){

    let ch = cheerio.load(body) ;

    let aTag = ch('a[data-hover="View All Results"]').text() ;
    console.log(aTag) ;
}