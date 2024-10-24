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

    const handleSearchName = async (event) => {
        event.preventDefault();
        const fname = document.getElementById("search-input-fname").value;
        const lname = document.getElementById("search-input-lname").value;
        if (!fname && !lname) { // check if both fields are empty
            alert("Please fill in at least one field.");
            return;
        }
        try { // send a POST request to the backend route
            const response = await fetch('http://localhost:8081/search-name', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ fname: fname, lname: lname })
            })
            const data = await response.json();
            if (data) { // if the response is successful, update the state variable data with the fetched data
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    };
    const handleSearchUsername = async (event) => {
        event.preventDefault();
        const username = document.getElementById("search-input-username").value;
        if (!username) {
            alert("Please fill the field.");
            return
        }
        try {
            const response = await fetch('http://localhost:8081/search-username', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ username: username })
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    };
    const handleSearchSalary = async (event) => {
        event.preventDefault();
        const salaryLow = document.getElementById("search-input-salary-low").value;
        const salaryHigh = document.getElementById("search-input-salary-high").value;
        if (!salaryLow || !salaryHigh) {
            alert("Please fill in both fields.");
            return
        }
        try {
            const response = await fetch('http://localhost:8081/search-salary', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ salaryLow: salaryLow, salaryHigh: salaryHigh })
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    };
    const handleSearchAge = async (event) => {
        event.preventDefault();
        const ageLow = document.getElementById("search-input-age-low").value;
        const ageHigh = document.getElementById("search-input-age-high").value;
        if (!ageLow || !ageHigh) {
            alert("Please fill in both fields.");
            return
        }
        try {
            const response = await fetch('http://localhost:8081/search-age', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ ageLow: ageLow, ageHigh: ageHigh })
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    };
    const handleSearchAfter = async (event) => {
        event.preventDefault();
        const after = document.getElementById("search-input-after").value;
        if (!after) {
            alert("Please fill the field.");
            return
        }
        try {
            const response = await fetch('http://localhost:8081/search-after', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ after: after })
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    };
    const handleSearchNever = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/search-never', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    }
    const handleSearchSame = async (event) => {
        event.preventDefault();
        const same = document.getElementById("search-input-same").value;
        if (!same) {
            alert("Please fill the field.");
            return
        }
        try {
            const response = await fetch('http://localhost:8081/search-same', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ same: same })
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error);
        }
        return
    }
    const handleSearchToday = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/search-today', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json();
            if (data) {
                setData(data);
            } else {
                alert("Internal Server Error. Please try again later.");
            }
        } catch (error) {
            console.log(error); 
        }
        return
    };

    return (
        <div id="home-container">
            <div id="search-div">
                <form id="search-form">
                    <label id="search-label">Search users by first and/or last name: </label>
                    <input className="search-input" type="text" id="search-input-fname" placeholder="John"/>
                    <input className="search-input" type="text" id="search-input-lname" placeholder="Smith"/>
                    <button onClick={handleSearchName} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search user by username: </label>
                    <input className="search-input" type="text" id="search-input-username" placeholder="John781"/>
                    <button onClick={handleSearchUsername} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search users by salary range: </label>
                    <input className="search-input" type="text" id="search-input-salary-low" placeholder="20000"/>
                    <input className="search-input" type="text" id="search-input-salary-high" placeholder="30000"/>
                    <button onClick={handleSearchSalary} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search users by age range: </label>
                    <input className="search-input" type="text" id="search-input-age-low" placeholder="30"/>
                    <input className="search-input" type="text" id="search-input-age-high" placeholder="40"/>
                    <button onClick={handleSearchAge} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search users who registered after the selected username: </label>
                    <input className="search-input" type="text" id="search-input-after" placeholder="John781"/>
                    <button onClick={handleSearchAfter} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search users who never signed in: </label>
                    <button onClick={handleSearchNever} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search users who registered on same day as the selected username: </label>
                    <input className="search-input" type="text" id="search-input-same" placeholder="John781"/>
                    <button onClick={handleSearchSame} id="search-btn">Search</button>
                </form>
                <form id="search-form">
                    <label id="search-label">Search users who registered today: </label>
                    <button onClick={handleSearchToday} id="search-btn">Search</button>
                </form>
            </div>
            <div id="table-container">
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
            </div>
            <Link to="/signin">
                <button id="logout-btn">Logout</button>
            </Link>
        </div>
    )
}

export default Home;