import { Link } from "react-router-dom";

function Register() {
    return (    
        <div>
            <h1>Register Page</h1>
            <form>
                <label for="fname">First Name: </label>
                <input type="text" id="fname" name="fname" />
                <br></br>
                <label for="lname">Last Name: </label>
                <input type="text" id="lname" name="lname" />
                <br></br>
                <label for="salary">Salary: </label>
                <input type="text" id="salary" name="salary" />
                <br></br>
                <label for="age">Age: </label>
                <input type="text" id="age" name="age" />
                <br></br>
                <Link to="/home">
                    <button>Register</button>
                </Link>
            </form>
            <h3>Click here to signin: </h3>
            <Link to="/signin">
                <button>Signin</button>
            </Link>
        </div>
    )
}

export default Register;