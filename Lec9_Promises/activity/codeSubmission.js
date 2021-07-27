const puppeteer = require("puppeteer") ;
const userName = "fewalo2609@dmsdmg.com" ;
const pwd = "123456789" ;
let tab ;
// all functions of puppeteer are promisified ===> that is every function returns a pending promise

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  }) ;
// console.log(browserPromise) ;

browserOpenPromise.then(function(browser){
    console.log("Browser opened !!!") ;
    let allPagesPromise = browser.pages() ;
    return allPagesPromise ;
})
.then(function(pages){
    tab = pages[0] ;
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login") ;
    return pageOpenPromise ;
})
.then(function(){
    let userNamePromise = tab.type('#input-1',userName) ;
    return userNamePromise ; 
})
.then(function(){
    let pwdPromise = tab.type('#input-2',pwd) ;
    return pwdPromise ;
})
.then(function(){
    let loginButtonPromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled') ;
    return loginButtonPromise ;
})
.then(function(){
    console.log("Entered the Hackerrank !!!") ;
})
.catch(function(error){
    console.log(error) ;
})