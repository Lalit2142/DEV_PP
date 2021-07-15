let fs = require("fs") ;

let content = process.argv.slice(2) ;

// console.log(content) ;


let flags = [] ;
let files = [] ;

for(let i = 0 ; i < content.length ; i++){

    let item = content[i] ;

    if(item.startsWith("-")){
        flags.push(item) ;
    }
    else{
        files.push(item) ;
    }
}

// console.log(files) ;
// console.log(flags) ;


for(let i = 0 ; i < files.length ; i++){

    let fileContent = fs.readFileSync(files[i], 'utf8'); ;
    console.log(fileContent) ;
}
