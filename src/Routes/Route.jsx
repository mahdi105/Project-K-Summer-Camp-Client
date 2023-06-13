import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import SelectedClasses from "../Pages/SelectedClasses/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ])
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: ([
            {
                path: '/dashboard/selectedClasses',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: '/dashboard/checkout',
                element: <Checkout></Checkout>
            }
        ])
    }
]);

export default router;