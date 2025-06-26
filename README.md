Company : CCODTECH IT SOLUTIONS PVT.LTD 
Name : Advika Bhardwaj 
Intern ID : CT06DF1922 
Domain : Software Development 
Duration : 6 weeks 
Mentor : Neela Santhosh

Summary : This project is a web server built with Node.js and the Express framework. It provides a RESTful API to manage a list of users.
Key Features:
Data Storage: The user data is stored in a local MOCK_DATA.json file, which acts as a simple database. The server reads from and writes to this file to persist changes.
Middleware: It uses express.json() and express.urlencoded() to parse JSON and URL-encoded data from incoming requests.
Server-Side HTML: There is one non-API route, /users, which generates and serves a basic HTML page displaying a list of all user first names.
API Endpoints:
The core of the project is the API located under the /api/users path, which supports the following CRUD (Create, Read, Update, Delete) operations:
GET /api/users: Retrieves and returns the complete list of all users as a JSON array.
POST /api/users: Creates a new user. It takes user data from the request body, assigns a new unique ID, adds it to the list, and saves the updated list to the JSON file.
GET /api/users/:id: Retrieves a single user by their id.
PATCH /api/users/:id: Updates the details of an existing user identified by their id. It merges the new data from the request body with the existing user data.
DELETE /api/users/:id: Removes a user from the list based on their id.
The server runs on port 8000. In short, it's a complete, self-contained example of a RESTful API for managing user data.

OUTPUT :
![Screenshot 2025-06-24 185042](https://github.com/user-attachments/assets/559ae877-c929-47cd-aa9f-790b3a4d42d2)
![Screenshot 2025-06-24 185042](https://github.com/user-attachments/assets/559ae877-c929-47cd-aa9f-790b3a4d42d2)
