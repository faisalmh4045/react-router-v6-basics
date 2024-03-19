import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const data = useLoaderData();
    const ownerInfo = useRouteLoaderData("root");
    
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
            <div className="border p-3 text-center">
                github project owner: {ownerInfo.name}
            </div>
        </>
    );
};

export default Users;

export const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.status === 404) {
        throw new Response("", {
            status: 404,
            statusText: "User Data Not Found",
        });
    }
    return response.json();
    // or, return response;
};
