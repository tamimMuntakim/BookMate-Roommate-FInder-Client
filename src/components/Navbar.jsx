import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"

const Navbar = () => {
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

    const links = <>
        <li><NavLink to="/" className="dark:text-yellow-50">Home</NavLink></li>
        <li><NavLink to="/find-roommate" >Add to Find Roommate</NavLink></li>
        <li><NavLink to="/browse-listing" >Browse Listing</NavLink></li>
        <li><NavLink to="/my-listings" >My Listings</NavLink></li>
        <button onClick={handleThemeChange} className='btn btn-primary'>Toggle Theme</button>
    </>

    return (
        <div className="navbar bg-base-100 p-0 flex justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden px-0 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 py-2 gap-1 shadow-lg">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg md:text-2xl px-0 text-primary font-bold"><img src="https://img.icons8.com/stickers/100/neighbour.png" alt="roommate" className='w-[30px] md:w-[50px] h-auto' />Book<p className='-ml-1 text-secondary '>Mate</p></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 items-center">
                    {links}
                </ul>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
                {/* {user ?
                    (
                        <>
                            <div className="tooltip tooltip-bottom" data-tip="Helo">
                                <div className="avatar avatar-online">
                                    <div className="w-6 md:w-8 rounded-full">
                                        <img src="" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleLogout} className='btn btn-primary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Logout</button>
                        </>)
                    :
                }(
                ) 
                 */}

                <Link to="/auth/login" className='btn btn-primary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Login</Link>
            </div >
        </div >
    );

};

export default Navbar;