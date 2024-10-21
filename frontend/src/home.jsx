import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/getall')       // call backend route
       .then(response => response.json())           // Converts the response from the fetch request into JSON format.
       .then(data => setData(data))            // Updates the state variable data with the fetched data using the setData function.
       .catch(err => console.log(err));
    }, []);

    return (
        <div id="home-container">
            <h1 id="title">Welcome</h1>
            <form>
                <div id="row-flex-box">
                    <input type="text" id="search" name="search" />
                    <button id="search-btn">Search</button>
                </div>
            </form>
            <table>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Register Day</th>
                        <th>Signin Time</th>
                    </tr>
                    {data.map((d, i) => (                 // Maps over the data array to create a table row (<tr>) for each item d in data. The index i is used as a unique key for each row.
                        <tr key={i}>
                            <td>{d.username}</td>
                            <td>{d.password}</td>
                            <td>{d.firstname}</td>
                            <td>{d.lastname}</td>
                            <td>{d.salary}</td>
                            <td>{d.age}</td>
                            <td>{d.registerday}</td>
                            <td>{d.signintime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/signin">
                <button id="logout-btn">Logout</button>
            </Link>
        </div>
    )
}

export default Home;