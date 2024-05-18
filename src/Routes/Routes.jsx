import Root from '../Layout/Root';
import Home from '../Pages/HomePage/Home'

import {
    createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);