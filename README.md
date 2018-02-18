# Adidas
Code Test for Adidas



Tests package include :

	•	1. UI with three test cases each for Chrome and Firefox build into single test suite
	•	2. API test

Getting Started

	•	Automation tests are baed on Javascript and use Selenium Web-driver for execution

Prerequisites

	•	Selenium Web-driver (https://www.npmjs.com/package/selenium-webdriver)
	•	Chrome driver - web driver (https://sites.google.com/a/chromium.org/chromedriver/=
	•	mozilla / geckodriver (https://github.com/mozilla/geckodriver/)
	•	node js (https://nodejs.org/en/)
	•	mocha test framework (https://mochajs.org)
	•	Chai assertion library (http://chaijs.com)
	•	Mochawesome standalone html reports (https://www.npmjs.com/package/mochawesome)
	•	Chrome and Firefox browsers

Installing

Installation procedures are defined in the link above 

Running the tests

Once the successful installation of the above mentioned requisites, following commands have to be used to run these automation scripts

 API Tests 

	•	mocha test.js -- reporter mochawesome


 UI Tests (Chrome)

	•	mocha ui1.js -- reporter mochawesome

 UI Tests (Firefox)

webdriver-manager start --detach --seleniumPort 4555
mocha ui2.js -- reporter mochawesome
webdriver-manager shutdown

Note: For geckodriver to start, following web driver manager has to be updated and started before election of the script and the mention port has to be up and running.


Authors
	•	Santhosh Kumar Venkobi

