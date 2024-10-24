# DBMS_Project1

## Project Description

This project involves creating a user table and implementing functionalities to register a new user, allow user sign-in, and provide various search functionalities for users in the system. The project spans over four weeks and requires interaction with a database via SQL queries.

### Features Implemented:
- User Registration
- User Sign-in
- Search users by first and/or last name
- Search users by user ID
- Search users by salary range
- Search users by age range
- Search users who registered after a specific user
- Search users who never signed in
- Search users who registered on the same day as a specific user
- Return users who registered today

A video explaining the query results is attached as part of the project submission. All SQL statements used have been submitted in a file named `sql.txt`.

## Table Schema:

```sql
CREATE TABLE Users(
   username VARCHAR(50) PRIMARY KEY,
   password VARCHAR(100), -- recommended to encrypt or hash
   firstname VARCHAR(50),
   lastname VARCHAR(50),
   salary FLOAT,
   age INTEGER,
   registerday DATE,
   signintime DATETIME
);
```

## Environment Setup

1. Install [XAMPP](https://www.apachefriends.org/index.html) to host the Apache web server and MySQL database locally.
2. Use git to clone the sample code repository:

   ```bash
   git clone https://github.com/dpop09/DBMS_Project1.git 
   ```

3. Create a new database called `web_app` and a user `john` with the password `1234` using phpMyAdmin.
4. Grant `john` all privileges on the `web_app` database.
5. Modify the `.env` file in the project to configure the following:

   ```env
   PORT=5050
   USER=root
   PASSWORD=
   DATABASE=web_app
   DB_PORT=3306
   HOST=localhost
   ```

6. Rename the `dotenv` file to `.env` using the following command:

   ```bash
   move dotenv .env
   ```

7. Under the `web_app` database, create a table `names` using the following query:

   ```sql
   CREATE TABLE names (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), date_added DATE);
   ```

## Backend Setup

1. Navigate to the Backend directory:

   ```bash
   cd C:\xampp\htdocs\database_javascript\project1\Backend
   ```

2. Initialize the project:

   ```bash
   npm init -y
   ```

3. Install the necessary dependencies:

   ```bash
   npm install express mysql cors nodemon dotenv
   ```

4. Modify the `scripts` section in the `package.json`:

   ```json
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "start": "nodemon app.js"
   }
   ```

5. Start the Backend server:

   ```bash
   npm start
   ```

6. You can now test the backend API by accessing endpoints such as:

   ```bash
   http://localhost:5050/getAll
   ```

   This will return JSON data of the users.

## Frontend Setup

1. To verify that your web server is running, create the first webpage `index.html` under `C:\xampp\htdocs` and visit:

   ```bash
   http://localhost/index.html
   ```

2. The sample frontend can be accessed via:

   ```bash
   http://localhost/database_javascript/project1/Frontend/index.html
   ```

## Usage Instructions

1. **User Registration:** Use the registration form to enter user details and register a new user.
2. **User Sign-in:** Users can log in using their registered username and password.
3. **Search Users:**
   - By first or last name.
   - By user ID.
   - By salary range.
   - By age range.
   - Users who registered after another specific user.
   - Users who never signed in.
   - Users who registered on the same day as a specific user.
   - Users who registered today.
