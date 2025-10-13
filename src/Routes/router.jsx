import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import LearnMore from "../Pages/LearnMore/LearnMore";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/learn",
                element: <LearnMore></LearnMore>
            }
        ]
    },
]);