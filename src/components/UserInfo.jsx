import { useLoaderData } from "react-router-dom";

const UserInfo = () => {
    const userDetails = useLoaderData();
    const { id, name, email, username } = userDetails;

    return (
        <div className="border p-sm-2 p-md-4 list-unstyled w-75 ms-3">
            <h6>ID: {id}</h6>
            <p>Username: {username}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserInfo;

export const getUserInfo = async ({ params }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.userId}`
    );
    if (response.status === 404) {
        throw new Response("", { status: 404, statusText: "User Details Not Found" });
    }
    return response.json();
};
