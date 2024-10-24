const express = require('express');
const cors = require('cors');
const dbOperations = require('./dbOperations');

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.post('/signin', async (request, response) => {
    try {
        const {username, password} = request.body;
        const result = await dbOperations.isCredentialsValid(username, password);
        if (result === true) {
            await dbOperations.updateSignintime(username);
        }
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
});

app.post('/register', async (request, response) => {
    try {
        const {username, password, fname, lname, salary, age} = request.body;
        let result = await dbOperations.insertNewUser(username, password, fname, lname, salary, age);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.get('/getall', async (request, response) => {
    try {
        const result = await dbOperations.getAll();
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-name', async (request, response) => {
    try {
        const {fname, lname} = request.body;
        const result = await dbOperations.searchByName(fname, lname);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-username', async (request, response) => {
    try {
        const {username} = request.body;
        const result = await dbOperations.searchByUsername(username);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-salary', async (request, response) => {
    try {
        const {salaryLow, salaryHigh} = request.body;
        const result = await dbOperations.searchSalary(salaryLow, salaryHigh);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-age', async (request, response) => {
    try {
        const {ageLow, ageHigh} = request.body;
        const result = await dbOperations.searchAge(ageLow, ageHigh);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-after', async (request, response) => {
    try {
        const {after} = request.body;
        const result = await dbOperations.searchAfter(after);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-never', async (request, response) => {
    try {
        const result = await dbOperations.searchNever();
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-same', async (request, response) => {
    try {
        const {same} = request.body;
        const result = await dbOperations.searchSame(same);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

app.post('/search-today', async (request, response) => {
    try {
        const result = await dbOperations.searchToday();
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
    }
})

// set up the web server listener
app.listen(8081, () => {
    console.log("I am listening.")
});