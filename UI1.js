// UI test executed on Chrome browser with Selenium webdriver and Chrome browser!!

var chai = require('chai');
var expect = require('chai').expect;
require('chromedriver');
var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
   .forBrowser('chrome')
   .build();

const addContext = require('mochawesome/addContext');
const until = webdriver.until;   

By = webdriver.By;


// Funciton to generate random email addresses for account creation
function makeEmail() {
    var strValues = "abcde12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 5; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail;
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + "@gmail.com"
    return strEmail;    
}


//UI test 1 : Accessing Adidas FI shop and closing the popup
test.describe('Test case 1:Adidas FI - Landing page', function(){
test.it('Shop Landing Page', function(done){
	this.timeout(50000);
	setTimeout(done,50000);
driver.get('https://adidas.fi');
driver.manage().window().maximize() 
driver.findElement(webdriver.By.className('icon-close')).click().then(()=> done());
});
});

// UI test 2: Click on Login element on landing page and navigating to account creation page
test.describe('Test case 2:Adidas FI - User Registeration', function(){
test.it('User navigation to registeration form', function(done){
this.timeout(50000);  
setTimeout(done,50000);
var login = driver.wait(until.elementLocated(webdriver.By.className("login-icon___1u-T-")), 20000);
login.click().then(()=> done());
var login = driver.wait(until.elementLocated(webdriver.By.className('materialize-btn materialize-btn-black')), 20000);
login.click().then(()=> done());  
});    
});       

//UI test 3: Accessing user account form and entering data in the form
// UI test also including closing the cookie form
test.describe('Test case 3:Adidas FI - User Registeration form', function(){
test.it('User data update - registeration form', function(done){
	this.timeout(50000);
setTimeout(function(){
driver.findElement(webdriver.By.id('dwfrm_profile_customer_firstname')).sendKeys('adidas').then(()=> done());
driver.findElement(webdriver.By.id('dwfrm_profile_customer_lastname')).sendKeys('user').then(()=> done());
driver.findElement(webdriver.By.id('dwfrm_profile_customer_birthday_dayofmonth')).sendKeys('01').then(()=> done());
driver.findElement(webdriver.By.id('dwfrm_profile_customer_birthday_month')).sendKeys('04').then(()=> done());
driver.findElement(webdriver.By.id('dwfrm_profile_customer_birthday_year')).sendKeys('1985').then(()=> done());
driver.findElement(webdriver.By.id('dwfrm_profile_login_username')).sendKeys(makeEmail()).then(()=> done()); 
driver.findElement(webdriver.By.id('dwfrm_profile_login_newpassword')).sendKeys('adidas123!').then(()=> done());
driver.findElement(webdriver.By.className("materialize-element-indicator")).click().then(()=> done());
}, 10000);
});
});


//UI test 4: Quiting driver and closing the browser
test.describe('Test case 4:Adidas FI - User Registeration', function(){
test.it('User navigation to registeration form', function(done){
this.timeout(50000);  
setTimeout(function(){	
driver.quit();
done();
}, 10000);
});  
}); 



