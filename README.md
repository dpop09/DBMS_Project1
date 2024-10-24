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

3. Create a new database called `web_app`
5. Create a `.env` file in the project and configure the following:

   ```env
   PORT=5050
   USER=root
   PASSWORD=
   DATABASE=web_app
   DB_PORT=3306
   HOST=localhost
   ```

7. Under the `web_app` database, create a table `Users` using the following query:

   ```sql
   CREATE TABLE Users(
      username VARCHAR(50) PRIMARY KEY,
      password VARCHAR(100),
      firstname VARCHAR(50),
      lastname VARCHAR(50),
      salary FLOAT,
      age INTEGER,
      registerday DATE,
      signintime DATETIME
   );
   ```

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd path\to\project\backend
   ```

2. Install necessary project dependencies:

   ```bash
   npm install
   ```

3. Start the Backend server:

   ```bash
   npm start
   ```

4. You can now test the backend API by searching in your browser "http://localhost:8081/getall"

   This will return JSON data of the users.

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd path\to\project\frontend
   ```

2. Install the necessary project dependencies:

```bash
   npm install
```

3. Start the frontend client:

   ```bash
   npm run dev
   ```

4. Click the browser link in your terminal "http://localhost:5173/"

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
