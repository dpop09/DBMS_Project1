import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/signin">
                <button>Signin</button>
            </Link>
        </div>
    )
}

export default Home;