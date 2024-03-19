import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const UserInfo = () => {
    const [userDetails, setUserDetails] = useState({});
    const [error, setError] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                if (res.status === 404)
                    throw new Error("Failed to fetch user details");
                return res.json();
            })
            .then((data) => setUserDetails(data))
            .catch((err) => setError(err));
    }, [userId]);

    return (
        <div className="border p-sm-2 p-md-4 list-unstyled w-75 ms-3">
            {error ? (
                <ErrorPage error={error.message} />
            ) : (
                <div>
                    <h6>ID: {userDetails?.id}</h6>
                    <p>Username: {userDetails?.username}</p>
                    <p>Name: {userDetails?.name}</p>
                    <p>Email: {userDetails?.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
