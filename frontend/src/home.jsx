import { Link } from "react-router-dom";

function Home() {
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
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Date Registered</th>
                    </tr>
                    <tr>
                        <td>1234</td>
                        <td>John</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>123456</td>
                        <td>30</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>5678</td>
                        <td>John</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>123456</td>
                        <td>30</td>
                        <td>2020-01-01</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <Link to="/signin">
                <button id="logout-btn">Logout</button>
            </Link>
        </div>
    )
}

export default Home;