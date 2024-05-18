import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navOptions =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Home</NavLink>
            <NavLink to='/contactUs' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Contact Us</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Dashboard</NavLink>
            <NavLink to='/menues' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Menu</NavLink>
            <NavLink to='/shop' className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our shop</NavLink>
        </>

    return (
        <div className="w-full bg-gray-400 fixed z-10  bg-opacity-30">
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
                <div className="navbar-end w-[10%]">

                    <a className="btn btn-sm bg-opacity-50 border-transparent">Sign out</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;