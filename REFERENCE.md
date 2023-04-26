# Todo

# Project Creation

Use CLI command `ng new <project-name>` to create a new project

Would you like to add Angular routing? --> y
Which stylesheet format would you like to use? --> select scss

A new project will be created

# Setup project structure

1. In src create a styles folder and set all styling related code

2. Setup app folder
   1. Library
      You can add pipes, directives and other shared material here
   2. modules --> use command `ng g m <module-name> --routing`
      You can creat and place different modules here
   3. shared folder
      Shared filder will contain shared resources like constants, guards, helpers, interfaces, services etc

# Installing Dependencies

You can install various NPM packages which will be required for the project
Commonoly used packages :-

1. "@ng-bootstrap/ng-bootstrap" --> For prestyled components (https://ng-bootstrap.github.io/#/home)
   command :- `ng add @ng-bootstrap/ng-bootstrap`
2. "@popperjs/core" --> For bootstrap
3. "bootstrap" --> For Styling (https://getbootstrap.com/)
4. "font-awesome" --> icons (https://fontawesome.com/v4/icons/)
   run `npm i font-awesome`
   import `node_modules/font-awesome/scss/font-awesome.scss` file in styles.scss
5. "jquery" --> required for bootstrap
6. "moment" --> for all time related code (https://momentjs.com/)
7. "ngx-bootstrap" --> For prestyled components (https://valor-software.com/ngx-bootstrap/#/)
8. "popper.js" --> required for bootstrap

# Bootstrap Setup

1.  For bootstrap - setup scripts and styles in angular.json file :-
    "styles": [
    "src/styles.scss"
    ],

    "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]

# Running the app

You can use any of the below command to run the app :-

1. npm run start
2. ng serve
3. ng s

By default the app will run on port 4200.
To change the port add --port flag to the above command

1. npm run start -- --port 4201
2. ng serve --port 4201
3. ng s --port 4201
