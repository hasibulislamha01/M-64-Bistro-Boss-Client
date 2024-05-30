import { Outlet } from "react-router-dom";
import UserSideMenu from "./UserSideMenu";

const UserLayout = () => {
    return (
        <div className="flex gap-2">
            <div className=""><UserSideMenu></UserSideMenu></div>
            <div className="w-full p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserLayout;