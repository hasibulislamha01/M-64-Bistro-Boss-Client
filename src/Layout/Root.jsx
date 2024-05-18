import { Outlet } from "react-router-dom";
import Footer from "../Components/SharedComponents/Footer";
import Navbar from "../Components/SharedComponents/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;