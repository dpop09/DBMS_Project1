import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {

    const navigate = useNavigate();

    const handleSignin = async (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }
        try {
            const response = await fetch('http://localhost:8081/signin', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({ username: username, password: password })
            })
            const data = await response.json();
            if (data === true) {
                navigate('/home');
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="container">
            <h1 id="title">Signin</h1>
            <form>
                <div id="row-flex-box">
                    <label for="username">Username: </label>
                    <input dtype="text" id="username" name="username" />
                </div>
                <br></br>
                <div id="row-flex-box">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </div>
                <br></br>
                <button onClick={handleSignin} id="signin-btn">Signin</button>
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