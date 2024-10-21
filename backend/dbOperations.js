const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config(); // read from .env file

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});

const dbOperations = {
    isCredentialsValid: async function (username, password) {
        try {
            const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
            const values = [username, password];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result.length > 0);
                    }
                });
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    updateSignintime: async function (username) {
        try {
            const sql = 'UPDATE users SET signintime = NOW() WHERE username = ?';
            const values = [username];
            return new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        } catch (error) {
            console.log(error);
        }
    },
    insertNewUser: async function (username, password, fname, lname, salary, age) {
        try {
            const sql = 'INSERT INTO users (username, password, firstname, lastname, salary, age, registerday, signintime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const registerday = `${year}-${month}-${day}`;
            const signintime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            const values = [username, password, fname, lname, salary, age, registerday, signintime];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(true);
                    }
                });
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async function () {
        try {
            const sql = 'SELECT * FROM users';
            const response = await new Promise((resolve, reject) => {
                db.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = dbOperations