import { Link, Outlet } from "react-router-dom";

const Posts = () => {
    return (
        <div className="d-flex flex-row justify-content-between m-sm-2 m-md-5">
            <ul className="border p-sm-2 p-md-4 list-unstyled w-25">
                <li>
                    <Link to="1">Post 1</Link>
                </li>
                <li>
                    <Link to="2">Post 2</Link>
                </li>
                <li>
                    <Link to="3">Post 3</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Posts;
