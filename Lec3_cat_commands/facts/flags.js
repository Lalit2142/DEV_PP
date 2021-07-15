let fs = require("fs") ;

let fileContent = fs.readFileSync("./f1.txt",'utf-8') ;

// console.log(fileContent) ;
let content = fileContent.split("\r\n") ;
// console.log(content) ;

// -s

function removeExtraLines(data){

    let res = [] ;
    let emptyPushed = false ;

    for(let i = 0 ; i < data.length ; i++){
        
        if(data[i] == '' && !emptyPushed){
            res.push(data[i]) ;
            emptyPushed = true ;
        }
        else if(data[i] != ''){
            res.push(data[i]) ;
        }
    }
    // console.log(res) ;

    let resString = res.join("\n") ;
    console.log(resString) ;
}

removeExtraLines(content) ;

// -b

function addLineNumbersToNonEmptyLines(data){

    let count = 1 ;
    for(let i = 0 ; i < data.length ; i++){
        if(data[i] != ''){
            data[i] = `${count}. ${data[i]}` ;
            count++ ;
        }
    }

    let resString = data.join("\n") ;
    console.log(resString) ;
}

// addLineNumbersToNonEmptyLines(content) ;

// -n

function addLineNumbersToNonAllLines(data){

    for(let i = 0 ; i < data.length ; i++){
        data[i] = `${i+1}. ${data[i]}` ;
    }

    let resString = data.join("\n") ;
    console.log(resString) ;
}

// addLineNumbersToNonAllLines(content) ;