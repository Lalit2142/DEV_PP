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
// whenever there is navigation , it takes time to load new page html(dom) , so we need to wait until the new pages load
// that's why we should wait before clicking an a tag link
.then(function(){
    let waitAndClickPromise = waitAndClick("#base-card-1-link") ;
    return waitAndClickPromise ;
})
.then(function () {
    let waitAndClickPromise = waitAndClick('a[data-attr1="warmup"]');
    return waitAndClickPromise;
})
.then(function(){
    console.log("Entered the Warm Up Page !!!") ;
})
.catch(function(error){
    console.log(error) ;
})

function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = tab.waitForSelector(selector,{visible : true}) ;
        waitPromise.then(function(){
            let clickPromise = tab.click(selector) ;
            return clickPromise ;
        })
        .then(function(){
            resolve() ;
        })
        .catch(function(){
            reject() ;
        })
    }) ;
}