const cheerio = require("cheerio") ;
const fs = require("fs") ;
const request = require("request") ;


let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595 ";
let url1 = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary" ;
let url2 = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard" ;


request(url2,cb) ;

function cb(error , response , body){
    // fs.writeFileSync("./data.html",body) ;
    parseBody(body) ;
}


function parseBody(body){

    let ch = cheerio.load(body) ;

    // let aTag = ch('a[data-hover="View All Results"]').text() ;
    // let lastBallCommentary = ch('div[itemprop="articleBody"] p').text() ;
    // let resStringArray = lastBallCommentary.split(".") ;
    // let requiredStringArray = [resStringArray[0],resStringArray[1]] ;
    // let res = requiredStringArray.join(".") ;
    // console.log(res) ;

    let allBowlers = ch('.match-scorecard-table .bowler tbody tr td').text() ;
    console.log(allBowlers) ;
}