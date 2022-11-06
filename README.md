# UI-TestCypress
 
// chromeWebSecurity: false this has to be added on the cypress.config.js file
## <i>How to configure & run E2E Tests Project instructions for Swapfiets</i> ##

 
After cloning the project from github (<b>git clone https://github.com/EviDimitropoulou/UI-TestCypress.git</b>) at any local directory, these steps should be performed <b>once</b>:

 

~~~

1. Install Visual Studio Code on your local system.

2. Install node.js on your local system.

3. Install npm on your local system.

~~~

~~~

1. Open cmd in project directory.

2. Run "npm install".

3. 

4. Run "npm install cypress --save-dev".

~~~

 

These steps should be performed <b>everytime</b>:

 

1. Open project in VS Code & Powershell terminal in it.

2. In order to start the test right npx cypress open

3. Select the Desired Browser to run the tests (Note: You must have install the browser to your         machine)

4. You can run it also headless typing the command :
       "<b>npx cypress run --browser {browser}</b>" 
    - chrome
    - firefox
    - webkit

4. To generate the report after test run is performed, type "<b>npx cypress run</b>"
