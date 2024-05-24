import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";

const Layout = () => {
    return (
        <div className="flex">
            <div className=""><SideMenu></SideMenu></div>
            <div className="my-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;