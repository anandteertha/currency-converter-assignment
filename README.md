# CurrencyConverter
  `This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.`

We have a fun practice assignment for you. 

The aim is for you to become aware of some of the technologies that the team is using and things you would need to learn once you join in. This assignment is just for you to practice and get a general idea of the technologies we use. You will be learning about these technologies in detail through our in-house training once you join. 

This will only be a front-end application and no need to create back-end i.e., server-side code. 

The assignments have some ‘nice to have’ features that would be additional points for you to practice and are not mandatory. We value your time, and we understand that you would be occupied with your college assignments and exams. 

## Note: - You are not going to be assessed in any way based on this assignment. It is just to get you curious about the exciting work that we are doing and lots of opportunities for you to learn.

The technologies that are to be used for this assignment are: 

1. HTML 
2. CSS3 
3. Typescript 
4. Angular 12 
5. Bootstrap / Prime Ng / Angular Material 

The tutorials you can use for these technologies are:  

1. https://angular.io/tutorial  
2. https://codecraft.tv/courses/angular/quickstart/overview/ 

Of course, you can refer to other documents as well, but we use these documentations to learn Angular. 
In case of any questions or queries, please feel free to contact us. 

**Assignment:**

This application will be used to store data for currencies and to compare the value of different currencies. 

## Users of the application are:
  1. Operator 
  2. Consumer 

These users will login through a Sign In page, the first page of the application. Credentials can be hardcoded, no need for backend. There can be an option to select user type on this page.  

## An Operator can:

  1. Login to the application. 
  2. View the list of currencies on Currency List Page.  
  3. Add a new Currency. 
  4. Edit existing Currency. 
  5. Delete existing Currency. 

## A Consumer can:

  1. Login to the application. 
  2. Search details of a currency by name of currency or name of country. 
  3. Compare different currency values against each other. 

## Details of currency to be stored:

  1. Name of currency 
  2. Country where the currency is used (one country if the currency is used in multiple countries). 
  3. Value of the currency against USD.  
  4. (optional) Symbol/image of the currency. 

## Pages/features to be included in the application: 

  #### 1. Sign In page 

    - This page should verify users. Users should only be able to access features of the app that they are authorized to do. For example, a consumer should not be able to add or delete a currency. 
    - User type input (dropdown/ radio button, etc.) 
    - Email/ Phone/ Username (Identification input) 
    - Password 
    - Sign In button 

  #### 2. Currency List Page 

    - Should display all details of all the stored currencies.  
    - Should have Edit and Delete button for each currency. 
    - Edit button should take user to Edit currency page/form. 
    - The Delete button should delete that currency. 
    - Should have Add New Currency button, which will take user to Add Currency page. 

  #### 3. Add Currency 

    - Should display a form with input fields for: 
    - Name of currency 
    - Country where the currency is used (one country if the currency is used in multiple countries). 
    - Value of the currency against USD.  
    - (optional) Symbol/image of the currency. 
    - Should have a submit and a cancel button. 
    - The form can be submitted if all the values are provided.  
    - Submit button should  
    - Submit the form 
    - Add the currency details to memory 
    - Redirect the user to Currency List Page where the newly added currency can be viewed.   
    - Cancel button should redirect the user to the Currency List Page. 

  #### 3. Edit Currency 

    - Should display a form with input fields for: 
    - Name of currency 
    - Country where the currency is used (one country if the currency is used in multiple countries). 
    - Value of the currency against USD.  
    - (optional) Symbol/image of the currency. 
    - These input fields should be populated with the details of the currency which the user wanted to edit on the Currency List Page. 
    - Should have a submit and a cancel button. 
    - The form can be submitted if all the values are provided.  
    - Submit button should  
    - Submit the form 
    - Add the currency details to memory 
    - Redirect the user to Currency List Page where the newly added currency can be viewed.   
    - Cancel button should redirect the user to the Currency List Page. 

  #### 4. Delete Currency 

    - Delete the targeted currency’s details. 
    - The deleted currency should no longer appear in the Currency List Page.  

  #### 5. Search Currency 

    - Provide the user with a search bar. 
    - Input can be  
    - Currency name, such as ‘dollar,’ ‘euro,’ ‘pound,’ etc. 
    - Country name, such as ‘India,’ ‘China,’ ‘USA,’ etc.  
    - Can have a ‘Go’ button next to the search bar. 
    - On pressing the Go button, display the search result. 
    - If a currency with the name or country is found, display all its details. 
    - If a currency is not found, display a message to the user.  

  #### 6. Compare Currency 

    - Should have two fields for searching/ choosing the currency. (May use dropdown inputs) 
    - Should have a Compare button. 
    - On clicking the Compare button, if both currency fields are set, display the following: 
    - Value of each currency against USD 
    - The value of the weaker currency against the stronger. 
        For example, a user selects INR and Pound Sterling and clicks compare, the user should be provided with the following information: 
        1 INR = 0.013 USD, 1 Pound = 1.32 USD 
        1 Pound = 99.91 INR 

  ### NOTE:  

    1. Provide navigation between pages for each user type. For example, a consumer user should be able to navigate between search and compare, if these features are on different pages.  
    2. Values need not be accurate.  
    3. You can use your creativity for designing various components and the way features are accessed.  
    4. Can hardcode some amount of data, so that the application is not empty each time it is started. 
    5. Nice to have features are:  
    6. Filtering the Currency List to display currencies with value lower or higher than USD. 
    7. Sorting the Currency List columns in ascending and descending order.  
    8. Validations for input fields. Such as while adding a new currency, if a currency with the provided name is already present, display a message to the user.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
