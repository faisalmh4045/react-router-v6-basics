import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className="d-flex justify-content-between border border-2 p-2 mb-5 bg-light">
            <Link to="/" className="text-decoration-none text-dark fw-bold">
                Logo
            </Link>
            <nav>
                <NavLink
                    to="/home"
                    className={({ isActive }) => {
                        return `mx-2 text-decoration-none  ${
                            isActive || location.pathname === "/"
                                ? "text-danger fw-bold"
                                : "text-dark"
                        }`;
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/posts"
                    className={({ isActive }) => {
                        return `mx-2 text-decoration-none  ${
                            isActive ? "text-danger fw-bold" : "text-dark"
                        }`;
                    }}
                >
                    Posts
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) => {
                        return `mx-2 text-decoration-none  ${
                            isActive ? "text-danger fw-bold" : "text-dark"
                        }`;
                    }}
                >
                    Users
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => {
                        return `mx-2 text-decoration-none  ${
                            isActive ? "text-danger fw-bold" : "text-dark"
                        }`;
                    }}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => {
                        return `mx-2 text-decoration-none  ${
                            isActive ? "text-danger fw-bold" : "text-dark"
                        }`;
                    }}
                >
                    About
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
