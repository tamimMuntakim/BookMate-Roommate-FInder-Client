import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;
