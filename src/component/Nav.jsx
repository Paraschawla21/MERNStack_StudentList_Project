import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar bg-dark">
            <Link to="/" className="navbar-brand text-light">
                React Projects
            </Link>
            <div className="navbar nav">
                <Link to="/create-student" className="nav-link">
                    Create Student
                </Link>
                <Link to="/student-list" className="nav-link">
                    Student List
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
