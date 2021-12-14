# Currency Converter

## Assignment:

This application will be used to store data for currencies and to compare the value of different currencies. 

### Users of the application are:
  1. Operator 
  2. Consumer 

These users will login through a Sign In page, the first page of the application. Credentials can be hardcoded, no need for backend. There can be an option to select user type on this page.  
***
### An Operator can:

  1. Login to the application. 
  2. View the list of currencies on Currency List Page.  
  3. Add a new Currency. 
  4. Edit existing Currency. 
  5. Delete existing Currency. 
***
### A Consumer can:

  1. Login to the application. 
  2. Search details of a currency by name of currency or name of country. 
  3. Compare different currency values against each other. 
***
### Details of currency to be stored:

  1. Name of currency 
  2. Country where the currency is used (one country if the currency is used in multiple countries). 
  3. Value of the currency against USD.  
  4. (optional) Symbol/image of the currency. 
***
### Pages/features to be included in the application: 

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

    1. Provide navigation between pages for each user type. 
        For example, a consumer user should be able to navigate between search and compare, if these features are on different pages.  
    2. Values need not be accurate.  
    3. You can use your creativity for designing various components and the way features are accessed.  
    4. Can hardcode some amount of data, so that the application is not empty each time it is started. 
  
  ### Nice to have features are (not mandatory):  
    1. Filtering the Currency List to display currencies with value lower or higher than USD. 
    2. Sorting the Currency List columns in ascending and descending order.  
    3. Validations for input fields. 
        Such as while adding a new currency, if a currency with the provided name is already present, display a message to the user.  
