import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="d-flex justify-content-between border border-2 p-2 mb-5 bg-light">
            <Link to="/" className="text-decoration-none text-dark fw-bold">
                Logo
            </Link>
            <nav>
                <NavLink
                    to=""
                    className={({ isActive }) => {
                        return `mx-2 text-decoration-none  ${
                            isActive ? "text-danger fw-bold" : "text-dark"
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
            </nav>
        </div>
    );
};

export default Header;
