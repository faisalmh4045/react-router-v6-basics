/* 
// using BrowserRouter

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
*/

import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Layout, { getOwnerInfo } from "./components/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Posts from "./components/Posts.jsx";
import Post from "./components/Post.jsx";
import Users, { getUsers } from "./components/Users.jsx";
import UserInfo, { getUserInfo } from "./components/UserInfo.jsx";
import Info from "./components/Info.jsx";

/* const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        id: "root",
        loader: getOwnerInfo,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "contacts",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "posts",
                element: <Posts />,
                children: [
                    {
                        index: true,
                        element: <Info />,
                    },
                    {
                        path: ":postId",
                        element: <Post />,
                    },
                ],
            },
            {
                path: "users",
                element: <Users />,
                errorElement: <ErrorPage />,
                loader: getUsers,
                children: [
                    {
                        path: ":userId",
                        element: <UserInfo />,
                        errorElement: <ErrorPage />,
                        loader: getUserInfo,
                    },
                ],
            },
        ],
    },
]); */

//  declaring routes with JSX
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route id="root" path="/" element={<Layout />} errorElement={<ErrorPage />} loader={getOwnerInfo}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="posts" element={<Posts />}>
                <Route index element={<Info />} />
                <Route path=":postId" element={<Post />} />
            </Route>
            <Route path="users" element={<Users />} errorElement={<ErrorPage />} loader={getUsers}>
                <Route path=":userId" element={<UserInfo />} errorElement={<ErrorPage />} loader={getUserInfo} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
