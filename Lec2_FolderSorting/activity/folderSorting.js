let fs = require("fs") ;
let path = require("path") ;
let extensions = require("./util") ;

let folderPath = "./Downloads" ;
let extensionFolderPath ;


function checkFolder(extension){

    extensionFolderPath = folderPath ;
    
    for(let key in extensions){
        if(extensions[key].indexOf(extension) > -1){
            extensionFolderPath += "/"+ key ;
            break ;   
        }
    }

    return fs.existsSync(extensionFolderPath) ;
}

function moveFile(fileName){

    // copy file
    let srcPath = folderPath+"/"+fileName ;
    let destPath = extensionFolderPath+"/"+fileName ;

    fs.copyFileSync(srcPath,destPath) ;

    // remove file
    fs.unlinkSync(srcPath) ;
}

function createFolder(){

    fs.mkdirSync(extensionFolderPath) ;
}

function sortFolder(folderPath){

    let contents = fs.readdirSync(folderPath) ;

    //console.log(contents) ; [".png",".jpg",".doc",.......]

    for(let i = 0 ; i < contents.length ; i++){

        let extension = path.extname(contents[i]);

         //console.log(extension) ; 

        let hasFolder = checkFolder(extension) ;

        if(hasFolder){
            // move file
            moveFile(contents[i]) ;
        }
        else{
            // create folder
            createFolder() ;
            //move file
            moveFile(contents[i]) ;
        }
    }
}


sortFolder(folderPath) ;