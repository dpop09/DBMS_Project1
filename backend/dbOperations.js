const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config(); // read from .env file

// create a connection to the database
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

// connect to the database
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
            const sql = 'SELECT * FROM users WHERE username = ?';
            const values = [username];
            // check if the user exists
            const user = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result[0]);
                    }
                });
            });
            if (!user) {
                return false;
            }
            // check if the password is correct
            const isMatch = await bcrypt.compare(password, user.password);
            return isMatch;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    updateSignintime: async function (username) {
        try {
            const sql = 'UPDATE users SET signintime = NOW() WHERE username = ?';
            const values = [username];
            // run the query
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
            // hash the password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const sql = 'INSERT INTO users (username, password, firstname, lastname, salary, age, registerday, signintime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            // get the current date
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(now.getDate()).padStart(2, '0');
            const registerday = `${year}-${month}-${day}`;
            const values = [username, hashedPassword, fname, lname, salary, age, registerday, null];
            // run the query
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
    },
    searchByName: async function (fname, lname) {
        try {
            const sql = 'SELECT * FROM users WHERE firstname = ? OR lastname = ?';
            const values = [fname, lname];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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
    },
    searchByUsername: async function (username) {
        try {
            const sql = 'SELECT * FROM users WHERE username = ?';
            const values = [username];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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
    },
    searchSalary: async function (salaryLow, salaryHigh) {
        try {
            const sql = 'SELECT * FROM users WHERE salary >= ? AND salary <= ?';
            const values = [salaryLow, salaryHigh];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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
    },
    searchAge: async function (ageLow, ageHigh) {
        try {
            const sql = 'SELECT * FROM users WHERE age >= ? AND age <= ?';
            const values = [ageLow, ageHigh];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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
    },
    // helper function to get the registerday from the username
    getRegisterdayFromUsername: async function (username) {
        try {
            const sql = 'SELECT registerday FROM users WHERE username = ?';
            const values = [username];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
            return response[0].registerday;
        } catch (error) {
            console.log(error);
        }
    },
    searchAfter: async function (after) {
        try {
            const sql = 'SELECT * FROM users WHERE registerday > ?';
            const values = [await this.getRegisterdayFromUsername(after)];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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
    },
    searchNever: async function () {
        try {
            const sql = 'SELECT * FROM users WHERE signintime IS NULL';
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
    },
    // helper function to get the registerday from the username
    getRegisterdayFromUsername: async function (username) {
        try {
            const sql = 'SELECT registerday FROM users WHERE username = ?';
            const values = [username];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
            return response[0].registerday;
        } catch (error) {
            console.log(error);
        }
    },
    searchSame: async function (same) {
        try {
            const sql = 'SELECT * FROM users WHERE registerday = ?';
            const values = [await this.getRegisterdayFromUsername(same)];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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
    },
    searchToday: async function () {
        try {
            const sql = 'SELECT * FROM users WHERE registerday = ?';
            // get the current date
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(now.getDate()).padStart(2, '0');
            const today = `${year}-${month}-${day}`;
            const values = [today];
            const response = await new Promise((resolve, reject) => {
                db.query(sql, values, (err, result) => {
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