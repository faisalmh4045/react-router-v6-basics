import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container mt-3">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;

export const getOwnerInfo = async () => {
    const response = await fetch("https://api.github.com/users/faisalmh4045");
    if (response.status === 404) {
        throw new Response("", {
            status: 404,
            statusText: "Owner Info Not Found",
        });
    }
    return response.json();
};
