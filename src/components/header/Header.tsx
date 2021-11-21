import styles from "./header.module.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import User from "../../pages/user/User";
import React from "react";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Router>
                <nav className="navbar navbar-expand-lg sticky-top bg-primary">
                    <div className="container-fluid">

                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <React.Suspense fallback="Loading...">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<User />} />
                    </Routes>
                </React.Suspense>
            </Router>
        </div>
    );
}

export default Header;