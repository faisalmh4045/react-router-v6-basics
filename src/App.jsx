import { Route, Routes } from "react-router-dom";
import LayoutBR from "./componentsBR/LayoutBR";
import Home from "./componentsBR/Home";
import Posts from "./componentsBR/Posts";
import Post from "./componentsBR/Post";
import Users from "./componentsBR/Users";
import UserInfo from "./componentsBR/UserInfo";
import ErrorPage from "./componentsBR/ErrorPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutBR />}>
                <Route path="" element={<Home />} />
                <Route path="Posts" element={<Posts />}>
                    <Route path=":postId" element={<Post />} />
                </Route>
                <Route path="users" element={<Users />}>
                    <Route path=":userId" element={<UserInfo />} />
                </Route>
            </Route>
            <Route path="/*" element={<ErrorPage error="Not Found" />} />
        </Routes>
    );
};

export default App;
