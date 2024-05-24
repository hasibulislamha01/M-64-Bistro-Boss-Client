import { IoWalletOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaTruck } from "react-icons/fa6";
import StatCard from "../../../Components/DashboardComponents/StatCard";

const DashHome = () => {
    const card1 = {
        icon: <IoWalletOutline />,
        number: 1000,
        title: "Revenue"
    }
    const card2 = {
        icon: <FaUsers></FaUsers>,
        number: 1500,
        title: "Customers"
    }

    const card3 = {
        icon: <SiCodechef></SiCodechef>,
        number: 103,
        title: "Products"
    }
    const card4 = {
        icon: <FaTruck></FaTruck>,
        number: 500,
        title: "Orders"
    }

    const cardCollection = [card1, card2, card3, card4]

    return (
        <div className="ml-8">
            <h1 className="uppercase text-3xl my-6">Hi, Welcome Back </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    cardCollection.map((card, index) =>
                        <StatCard
                            key={index}
                            icon={card.icon}
                            number={card.number}
                            title={card.title}
                        ></StatCard>
                    )
                }
            </div>
        </div>
    );
};

export default DashHome;