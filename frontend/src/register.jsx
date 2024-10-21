import { Link, useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const salary = document.getElementById("salary").value;
        const age = document.getElementById("age").value;
        if (!username || !password || !fname || !lname || !salary || !age) {
            alert("Please fill in all fields.");
            return;
        }
        try {
            const response = await fetch('http://localhost:8081/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password, fname: fname, lname: lname, salary: salary, age: age })
            })
            const data = await response.json();
            if (data === true) {
                navigate('/home');
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (    
        <div id="container">
            <h1 id="title">Register</h1>
            <form>
                <div id="row-flex-box">
                    <label for="username">Username: </label>
                    <input type="text" id="username" name="username" />
                </div>
                <br></br>
                <div id="row-flex-box">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </div>
                <br></br>
                <div id="row-flex-box">
                    <label for="fname">First Name: </label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <br></br>
                <div id="row-flex-box">
                    <label for="lname">Last Name: </label>
                    <input type="text" id="lname" name="lname" />
                </div>
                <br></br>
                <div id="row-flex-box">
                    <label for="salary">Salary: </label>
                    <input type="text" id="salary" name="salary" />
                </div>
                <br></br>
                <div id="row-flex-box">
                    <label for="age">Age: </label>
                    <input type="text" id="age" name="age" />
                </div>
                <br></br>
                <button onClick={handleRegister} id="register-btn">Register</button>
            </form>
            <div id="flex-box">
                <h3>Already registered? </h3>
                <Link to="/signin">
                    <a>Signin</a>
                </Link>
            </div>
        </div>
    )
}

export default Register;