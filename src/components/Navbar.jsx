import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip'
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const savedTheme = localStorage.getItem("savedTheme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            localStorage.setItem("savedTheme", "light");
            setTheme("light");
        }

        (theme === "light")
            ?
            document.documentElement.setAttribute("data-theme", "light") :
            document.documentElement.setAttribute("data-theme", "dark");
    }, [theme]);

    const handleThemeChange = () => {
        const newSavedTheme = (theme === "light" ? "dark" : "light");
        localStorage.setItem("savedTheme", newSavedTheme);
        setTheme(newSavedTheme);
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Successfully Logged out!!",
                    timer: 1500
                });
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Please try again !!",
                    timer: 1500
                });
            });
    }

    const links = <>
        <li><NavLink to="/" className="dark:bg-secondary dark:text-white">Home</NavLink></li>
        <li><NavLink to="/add-roommate" className="dark:bg-secondary dark:text-white">Add to Find Roommate</NavLink></li>
        <li><NavLink to="/browse-listing" className="dark:bg-secondary dark:text-white">Browse Listing</NavLink></li>
        <li><NavLink to="/my-listings" className="dark:bg-secondary dark:text-white">My Listings</NavLink></li>
    </>

    return (
        <nav className="w-11/12 md:container mx-auto navbar p-0 flex justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 py-2 gap-1 shadow-lg">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg md:text-2xl px-0 text-primary font-bold"><img src="https://img.icons8.com/stickers/100/neighbour.png" alt="roommate" className='w-[30px] md:w-[50px] h-auto hidden md:inline' />Book<p className='-ml-1 text-secondary '>Mate</p></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 items-center">
                    {links}
                </ul>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
                {
                    (theme === "light")?
                    <IoSunny className='w-[15px] h-auto md:w-[20px] text-amber-500 mr-2 md:mr-4' onClick={handleThemeChange}/>
                    :
                    <FaMoon className='w-[15px] h-auto md:w-[20px] rotate-y-180 text-white mr-2 md:mr-4' onClick={handleThemeChange}/>
                }
                {user ?
                    (
                        <>
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                <div className="avatar avatar-online">
                                    <div className="w-7 md:w-9 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </a>
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleLogout} className='btn btn-secondary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Logout</button>
                        </>)
                    :
                    (
                        <Link to="/auth/login" className='btn btn-primary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Login</Link>
                    )
                }
            </div >
        </nav >
    );

};

export default Navbar;