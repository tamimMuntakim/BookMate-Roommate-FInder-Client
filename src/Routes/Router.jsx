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
                element: <AddRoommate></AddRoommate>,
            },
            {
                path: "/browse-listing",
                element: <BrowseListing></BrowseListing>,
            },
            {
                path: "/my-listings",
                element: <MyListings></MyListings>,
            },
            {
                path: "/roommate-details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <RoommateDetails></RoommateDetails>,
                hydrateFallbackElement: <Loader></Loader>,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;
