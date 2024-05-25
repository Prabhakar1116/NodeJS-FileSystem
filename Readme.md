NodeJS_Day_1

This documentation provides details on the task done on the NodeJS in which we use API Endpoints to create txt files whose name and content are date and time and display them.

GET - New Request

Base URL:
http://localhost:4000
Packages installed:
Express: npm i express
Nodemon: npm i nodemon
Path: npm i path
Date-FNS: npm i date-fns

Endpoints
GET /
Description:
This / get request is used to display the content that is placed in the base url page it is a paragraph that tells the user how to move to the other functionalities.
Content:
"This is the main page to go to both endpoints add /create for 1st endpoint & /view for 2nd endpoint"  
GET /create
Description:
Creates a new text file with the current timestamp as its file_name and its content.

Content:
It uses 3rd party packages (i.e) Date-fns to get date functionality and fs (filesystem) to create the file in a specified folder.

GET /read
Description:
Retrieves and displays a list of all text files in the "Time_Stamp" folder.

Content:
It first reads the folder specified and checks for the files after that if filters the files for txt format and stores it in an empty array and then displays it.

Usage
Overview Endpoint:
URL: /
Method: GET
Description: Provides an overview of available endpoints.
Example: http://localhost:4000/

Create Text File Endpoint:
URL: /create
Method: GET
Description: Creates a new text file with the current timestamp.
Example: http://localhost:4000/create

Retrieve Text Files Endpoint:
URL: /read
Method: GET
Description: Retrieves a list of all text files in the "Time_Stamp" folder.
Example: http://localhost:4000/read


Postman Documentation link: https://documenter.getpostman.com/view/35182338/2sA3QqgYe3

