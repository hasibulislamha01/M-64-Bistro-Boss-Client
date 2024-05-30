import { BiSolidPhoneCall, BiWallet } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import StatCard from "../../../Components/DashboardComponents/StatCard";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext)
    const card1 = {
        icon: <BiWallet></BiWallet>,
        number: 250,
        title: 'Menu'
    }
    const card2 = {
        icon: <MdHome />,
        number: 103,
        title: 'Shop'
    }
    const card3 = {
        icon: <BiSolidPhoneCall />,
        number: 3,
        title: 'Contact'
    }

    const cardArr = [card1, card2, card3]

    return (
        <div className="my-12 px-12 space-y-8">
            <section>
                <h1 className="text-3xl uppercase mb-6">Hi, Welcome Back</h1>
                <div className="grid grid-cols-3 gap-6">
                    {
                        cardArr.map((item, index) =>
                            <StatCard
                                key={index}
                                icon={item.icon}
                                number={item.number}
                                title={item.title}
                            ></StatCard>
                        )
                    }
                </div>
            </section>
            <section className="flex gap-12">
                <div className="flex-1 bg-amber-100 rounded-lg flex justify-center items-center">
                    <div className="p-16 space-y-6">
                        <img className="rounded-full" src={user?.photoURL} alt="" />
                        <h1 className="text-center text-2xl">{user?.displayName}</h1>
                    </div>
                </div>
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl uppercase">Your Activities</h1>
                    <p>Orders: { }</p>
                    <p>Reviews: { }</p>
                    <p>Bookings: { }</p>
                </div>
            </section>
        </div>
    );
};

export default UserHome;