import Root from '../Layout/Root';
import Home from '../Pages/HomePage/Home'

import {
    createBrowserRouter,
} from "react-router-dom";
import Menu from '../Pages/MenuPage/Menu';
import Order from '../Pages/OrderPage/Order';
import Login from '../Pages/LoginPage/Login';
import Register from '../Pages/RegisterPage/Register';
import DashHome from '../Pages/DashboardPages/DashboardHome/DashHome';
import Layout from '../Pages/DashboardPages/DashboardLayout/Layout';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menues",
                element: <Menu></Menu>
            },
            {
                path: "/shop",
                element: <Order></Order>
            },
            {
                path: "/shop/:category",
                element: <Order></Order>
            },
            {
                path: "/dashboard",
                element: <DashHome></DashHome>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Layout></Layout>,
        children: [
            {
                path: '/dashboard',
                element: <DashHome></DashHome>
            }
        ]
    }
]);