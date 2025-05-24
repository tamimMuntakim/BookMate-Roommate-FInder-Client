import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import AddRoommate from "../Pages/AddRoommate";
import Loader from "../components/Loader";
import RoommateDetails from "../Pages/RoommateDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Providers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/add-roommate",
                element: <PrivateRoute>
                    <AddRoommate></AddRoommate>,
                </PrivateRoute>
            },
            {
                path: "/browse-listing",
                loader: () => fetch("http://localhost:3000/roommates/"),
                element: <BrowseListing></BrowseListing>,
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: "/my-listings",
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>,
            },
            {
                path: "/roommate-details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <PrivateRoute>
                    <RoommateDetails></RoommateDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;
