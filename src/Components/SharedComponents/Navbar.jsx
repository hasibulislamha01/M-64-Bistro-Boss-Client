import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import useCartData from "../../Hooks/useCartData";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user, user?.photoURL);

    const [cart] = useCartData()
    console.log(cart)

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('successfully logged out')
                toast.success('successfully logged out')
            }).catch((error) => {
                console.error(error.message)
                toast.error(error.message)
            });
    }

    const navOptions =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Home</NavLink>
            <NavLink to='/contactUs' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Contact Us</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Dashboard</NavLink>
            <NavLink to='/menues' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Menu</NavLink>
            <NavLink to='/shop' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our shop</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>
                <div className="flex items-center relative">
                    <div className="text-2xl"><IoCartOutline></IoCartOutline></div>
                    <div className="badge badge-warning badge-sm">{cart?.length}</div>
                </div>
            </NavLink>
        </>

    return (
        <div className="w-full bg-black fixed z-10  bg-opacity-50">
            <div className="h-[50px] navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <div className="flex items-center justify-between gap-6">
                        {navOptions}
                    </div>
                </div>
                <div className="navbar-end w-[17%]">
                    {
                        user ?
                            <div className="flex justify-center items-center gap-3">
                                <a onClick={handleLogout} className="btn btn-sm bg-opacity-50 border-transparent">Sign out</a>
                                <div className=" rounded-full h-10 w-10"><img className="rounded-full" src={user?.photoURL} alt="" /></div>
                            </div>
                            :
                            <Link to='/login' className="text-white">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;