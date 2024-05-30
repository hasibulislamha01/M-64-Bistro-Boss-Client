import Root from '../Layout/Root';
import Home from '../Pages/HomePage/Home'

import {
    createBrowserRouter,
} from "react-router-dom";
import Menu from '../Pages/MenuPage/Menu';
import Order from '../Pages/OrderPage/Order';
import Login from '../Pages/LoginPage/Login';
import Register from '../Pages/RegisterPage/Register';
import UserLayout from '../Pages/UserPages/UserLayout';
import UserHome from '../Pages/UserPages/UserHome/UserHome';
import Reservation from '../Pages/UserPages/ReservationPage/Reservation';
import History from '../Pages/UserPages/PaymentHistoryPage/History';
import MyCarts from '../Pages/UserPages/MyCartPage/MyCarts';
import MyBookings from '../Pages/UserPages/MyBookingsPage/MyBookings';
import Contact from '../Pages/ContactUsPage/Contact';
import ManageUsers from '../Pages/AdminPages/ManageUsersPage/ManageUsers';
import ValidateAdmin from '../Pages/AdminPages/ValidateAdmin/ValidateAdmin';
import AddItem from '../Pages/AdminPages/AddItemsPage/AddItem';
import AdminHome from '../Pages/AdminPages/AdminHomePage/AdminHome';
import Payment from '../Pages/UserPages/PaymentPage/Payment';


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
                path: "/contactUs",
                element: <Contact></Contact>
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
        element: <UserLayout></UserLayout>,
        children: [
            {
                path: '/dashboard/user',
                element: <UserHome></UserHome>
            },
            {
                path: '/dashboard/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/dashboard/history',
                element: <History></History>
            },
            {
                path: '/dashboard/carts',
                element: <MyCarts></MyCarts>
            },
            {
                path: '/dashboard/bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/admin',
                element: <ValidateAdmin> <AdminHome></AdminHome> </ValidateAdmin>
            },
            {
                path: '/dashboard/admin/users',
                element: <ValidateAdmin><ManageUsers></ManageUsers></ValidateAdmin>
            },
            {
                path: '/dashboard/admin/addItems',
                element: <ValidateAdmin> <AddItem></AddItem> </ValidateAdmin>
            },
            
        ]
    },
    
]);