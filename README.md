# VC-TechClub-Repair
Valencia College Tech Club Computer Repair Website

## Website Goals
* Provide a database to store repair forms
* Provide a GUI for VCTechClub staff to access database
* Provide basic database functions (Reports, Transactions) as well as custom functions (Searches)

### Version 0.0.1

### Tech Stack

* [Node.js](http://www.nodejs.org): Powerful, server-side JavaScript.
* [AngularJS](http://www.angularjs.org): Google's frontend framework. MVC, powerful, and really just AWESOME.
* [Express](http://www.expressjs.com): A nice framework for node. Helps keep things pretty and is easy to use
* [jQuery](http://www.jquery.com): Well I think JQuery can speak for itself...
* [Jade](http://www.jade-lang.com): Who like to write HTML with ending tags anyways?
* [Grunt](http://www.gruntjs.com): The man behind the work. Lots of plugins available and it is easy to setup!
* [Bower](http://www.bower.io): Package manager used for some resources not available on NPM.
* [SASS](http://www.sass-lang.com): Makes writing CSS fun and gives you some added tools such as variables, and mixins.
* [Compass](http://www.compass-style.org): A Sass goodie-bag.
* [Jasmine](http://jasmine.github.io): A behavior-driven testing framework to unit test your JavaScript.
* [Material Angular](https://material.angularjs.org/latest/) To say it's Beautiful is an understate! This brings Google's Material design from their mobile team transferred to the Web. I love it!
* [Protractor](https://angular.github.io/protractor/): Nice testing framework that uses Jasmine and Selenium to run tests. ALWAYS test your code!
* [Travis-Ci](http://travis-ci.org/): Meet Travis. He builds and tests things. He's very good at his job too!

### Subidirectory Specific Readme
Each sub-directory and folder will have a readme doc talking about and explaining what its respectivly directory does and how to use it.

## Main Directory

 - The main directory houses the server and routes as well as serving as the primary parent folder for the node server.
 - Public sub-folder: Houses "Public" elements of the site, i.e. Javascript and Stylesheets.
 - Routes sub-folder: A folder for all of the Javascript handling the routes, as well as the API's.
 - Views sub-folder: Used as a path in jade, contains all of the jade, or html needed to create the page.
 - .bowerrc: Bower Configuration file.
 - .gitignore: Git VCS ignore file. Ignores files not needed to be kept in the source (i.e. node-modules)
 - app.js: The MAIN server file. Mess with this and things can break!
 - bower.json: Bower file used for handling bower dependencies.
 - Gruntfile.js: Grunt config file used for Grunt-CLI. -
 - Package.json: NPM package file used for keeping track of Node Dependencies.
 - Routes.js: Handles all of incoming requests to the server in specified routes.



License
---
MIT
