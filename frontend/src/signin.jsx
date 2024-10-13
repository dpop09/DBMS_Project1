import React from "react";
import { Link } from "react-router-dom";

function Signin() {

    return (
        <div>
            <h1>Signin Page</h1>
            <form>
                <label for="userid">User ID: </label>
                <input type="text" id="userid" name="userid" />
                <Link to="/home">
                    <button>Signin</button>
                </Link>
            </form>
            <h3>Click here to register: </h3>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    )
}

export default Signin;