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
import EnrolledClass from "../Pages/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import FeedbackPage from "../Pages/FeedbackPage/FeedbackPage";

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
                path: '/dashboard/checkout/:id',
                element: <Checkout></Checkout>
            },
            {
                path: '/dashboard/enrolledClasses',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path:'/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: '/dashboard/manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: '/dashboard/feedback/:id',
                element: <AdminRoute><FeedbackPage></FeedbackPage></AdminRoute>
            }
        ])
    }
]);

export default router;