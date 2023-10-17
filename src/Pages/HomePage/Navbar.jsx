/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {



    const { user, logout } = useAuth()
    console.log(user)

    const navLink = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">Upcoming Events</NavLink></li>
        <li><NavLink to="/team">Team Members</NavLink></li>
        { user && <>
        
            <li><NavLink to="/purchase">Purchase</NavLink></li>
            <li><NavLink to="/partner">PH Arena Partner</NavLink></li>

        </>}


    </>

   

    return (
        <div className="navbar bg-[#1C1F38] text-white hover:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-teko text-white border-none bg-gradient-to-r from-[#1C1F38] to-[#42D0D9]">PH Arena </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                
                                    <img src={user.photoURL} alt={user.displayName} />
                               
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <button className="btn btn-sm btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logout}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to="/login"><button className="btn text-white border-none bg-gradient-to-r from-[#1C1F38] to-[#42D0D9]">Login Now</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;