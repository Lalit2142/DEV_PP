// Higher order functions ==> Functions which takes function as argument
// Callbacks              ==> Functions which are passed to a function as an argument


function getFirstName(fullName){

    let names = fullName.split(" ") ;
    return names[0] ;
}

function getLastName(fullName){

    let names = fullName.split(" ") ;
    return names[names.length-1] ;
}

function sayHi(fullName , fun){
    let name = fun(fullName) ;
    console.log(name) ;
}

sayHi("Peter Parker",getLastName) ;
sayHi("Tony Stark",getFirstName) ;
sayHi("Bruce Banner" , getLastName) ;
sayHi("Steve Rogers",getFirstName) ;