import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import User from "./User";

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            <h5 className="text-center">JSON PlaceHolder Users & Details</h5>
            <div className="d-flex flex-row justify-content-between m-sm-2 m-md-5">
                <ul className="border p-sm-2 p-md-4 list-unstyled text-decoration-underline w-25">
                    <h6>Total Users: {data.length}</h6>
                    {data.map((user, idx) => (
                        <User user={user} key={idx} />
                    ))}
                </ul>
                <Outlet />
            </div>
        </>
    );
};

export default Users;
