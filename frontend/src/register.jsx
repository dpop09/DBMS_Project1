import { Link } from "react-router-dom";

function Register() {
    return (    
        <div id="container">
            <h1 id="title">Register</h1>
            <form>
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
                <Link to="/home">
                    <button id="register-btn">Register</button>
                </Link>
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