import Root from '../Layout/Root';
import Home from '../Pages/HomePage/Home'

import {
    createBrowserRouter,
} from "react-router-dom";
import Menu from '../Pages/MenuPage/Menu';
import Order from '../Pages/OrderPage/Order';


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
        ]
    },
]);