import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutBR = () => {
    return (
        <div className="container mt-3">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayoutBR;
