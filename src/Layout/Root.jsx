import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/SharedComponents/Footer";
import Navbar from "../Components/SharedComponents/Navbar";

const Root = () => {
    const location = useLocation()
    console.log('current location is ',location)

    const isLoginPage = location?.pathname==="/dashboard"
    console.log(isLoginPage)
    return (
        <div>
            { <Navbar></Navbar>}
            <div className="">
                <Outlet></Outlet>

            </div>
            { isLoginPage ||  <Footer></Footer>}
        </div>
    );
};

export default Root;