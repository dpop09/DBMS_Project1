import React from "react";
import { Link } from "react-router-dom";

function Signin() {

    return (
        <div id="container">
            <h1 id="title">Signin</h1>
            <form>
                <div id="row-flex-box">
                    <label for="userid">User ID: </label>
                    <input dtype="text" id="userid" name="userid" />
                </div>
                <br></br>
                <Link to="/home">
                    <button id="signin-btn">Signin</button>
                </Link>
            </form>
            <div id="flex-box">
                <h3>Not yet registered?</h3>
                <Link to="/register">
                    <a>Register</a>
                </Link>
            </div>
        </div>
    )
}

export default Signin;