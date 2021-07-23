// var

// console.log(a) ;
// var a = 10 ;
// console.log(a) ;

// function sayHi(){
//     console.log(b) ;
//     var b = 20 ;
//     console.log(b) ;
//     console.log("function says hi!!!") ;
// }

// sayHi() ;



// let 


console.log(a) ;    // ==> will give error because it is present in Temporal Dead zone ==> same case with const

let a = 10 ;
console.log(a) ;

function sayHi(){
    // console.log(b) ; ==> will give error because it is present in Temporal Dead zone ==> same case with const
    let b = 20 ;
    console.log(b) ;
    console.log("function says hi!!!") ;
}

sayHi() ;