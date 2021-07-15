let fs = require("fs") ;

const p = require("path");

let extensions = require("./util") ;

let folderPath = "./Downloads" ;
let extensionFolderPath ;


function checkFolder(extension , folderPath){

    
    extensionFolderPath = folderPath ;

    for(let key in extensions){                 // key ==> Images,Documents,Compressed,Audio,Video
        if(extensions[key].includes(extension)){
            extensionFolderPath += "/"+key ;
        }
    }

    return fs.existsSync(extensionFolderPath) ;
}

function moveFile(folderPath , fileName){

    // copy file from src to dest
        let src = `${folderPath}/${fileName}` ;                  // Downloads/Misc/def.png
        let dest = `${extensionFolderPath}/${fileName}` ;        // Downloads/Misc/Images/def.png
        fs.copyFileSync(src,dest) ;                             

    // delete file at src

    fs.unlinkSync(src) ;
}

function createFolder(){

    fs.mkdirSync(extensionFolderPath) ;
}

function sortFolder(folderPath){

    let contents = fs.readdirSync(folderPath) ;     // folderPath = ./Downloads
    // console.log(contents) ;                      // [Audio,Compressed,Documents,Folder1,Folder2,Images,Misc,Video,def.mp3,def.pdf....]                          

    for(let i = 0 ; i < contents.length ; i++){

        let path = folderPath+"/"+contents[i] ;
        // console.log(path) ;
        let isFolder = fs.lstatSync(path).isDirectory() ;

        if(isFolder){
            let isSorted = false ;
            
            for(let key in extensions){                 // keys ==> Images, Documents , Audio , Video , Compressed
                if(key == contents[i]){
                    isSorted = true ;
                    break ;
                }
            }

            if(!isSorted)
                sortFolder(path) ;
        }
        else{

            let extension =  p.extname(contents[i]);
            let hasFolder = checkFolder(extension,folderPath) ;

            if(hasFolder){
                moveFile(folderPath,contents[i]) ;
            }
            else{
                createFolder() ;
                moveFile(folderPath,contents[i]) ;
            }
        }
    }
}


sortFolder(folderPath) ;

