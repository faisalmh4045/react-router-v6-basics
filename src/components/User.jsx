import { Link } from "react-router-dom";

const User = ({ user }) => {
    return (
        <li>
            <Link to={`${user.id}`}>{user.name}</Link>
        </li>
    );
};

export default User;
