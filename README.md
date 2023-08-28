# StoreWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Credentials

For `Admin` username is `Admin` and password is `Admin`
For `User` username is `User` and password is `User`

## Login and Logout feature

If you are login scren and doing some falsy credentials then it will show some popup message to you
If you are trying the correct credentials then according to that it will redirect to you corresponding view

You can also do logout

## For testing the Authentication

Make sure you have deleted the local storage or Logout from the store app to test this

If you are not login and typing some routes then app will redirect to you some /permission-denied route

## Admin View

You can have the list of the products available from dummy api
You can click on edit OR delete action : Pending (due to time shortage)

## User view

You can have the available category,
you can choose and see the products inside it

you have the search feature based on product title
you can click on product title to show the expand(full view details of the product) in modal
you can acknowlege the modal

## Pending Items

Creation of the product UI only : API is already implemented
Updation of the product UI only : API is already implemented
Deletion of the product UI only : API is already implemented

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
