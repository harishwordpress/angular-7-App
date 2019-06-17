Use Mock Json Server https://github.com/typicode/json-server to store your JSON data
Create static JSON file to be used in mock json server with appropriate routes etc. with following fields - id,first name, last name, complete address as object (street address, apartment number, city, state, zip) profile image url (use any static place holder image) and order total (has two fields, amount field - must store cents i.e. 1000 equals $10.00, and currency). Create 10 records. (see sample data file attached here)
Use Angular 4+ to create appropriate modules, components, directives, pipes, route guard, data resolver for following pages
Component - Login Page 
With username and password and login button
Any arbitrary value in fields can log user in
Create AuthService to hold flag [true or false] if user is already logged in
Component #1 [ cannot be accessed until user logs in]
Fetch all users and display, all fields
This list of should searchable by first name, last name or amount
narrow search results in the list as user types in the search input field
Create custom pipe called Amount Pipe and use it to display order total field. It should display formatted amount i.e. currency symbol and decimal; Take into account internalization of currency formats. Use this pipe in your html to display amount object
Create pipe to display address object and use it in your HTML
Clicking on the row navigates to Component #2
Component #2  [ cannot be accessed until user logs in]
Create input fields to modify data
This page receives data from page #1
user id is passed in the URL
Create data resolver to fetch user from JSON server provided in URL params
Display user data in input fields to edit
Have three buttons, delete, cancel and save - delete button deletes the user in JSON mock server file (make sure to bring up a confirmation modal with “yes - delete”, and “cancel” buttons, clicking delete deletes user, cancel cancels action ), cancel button navigates you back to Component #1, save button saves data in JSON mock server file.
NOTE: currency field is not editable
NOTE: amount field must be edited as decimal but saved in cents
Make sure to have a title bar on all pages with current users first and last name and logout button. Logout button logs user out
BONUS: If create a common layout for all pages to be rendered in i.e. a common template for all pages in which component specific selectors can be rendered.
BONUS: SASS
No 3rd party libs other than Angular 4+ core and components and SASS compiler
Deploy to container or cloud service or your choice like AWS, Heroku etc.
