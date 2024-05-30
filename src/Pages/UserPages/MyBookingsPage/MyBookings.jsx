import { Link } from "react-router-dom";
import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";

const MyBookings = () => {
    return (
        <div className="mt-12">
            <ThemeHeading
            subheading={'---Excellent Ambience---'}
            heading={'MY BOOKINGS'}
            ></ThemeHeading>
            <Link to='/dashboard/payment' className="btn bg-[#D1A054]">Pay Now</Link>
        </div>
    );
};

export default MyBookings;