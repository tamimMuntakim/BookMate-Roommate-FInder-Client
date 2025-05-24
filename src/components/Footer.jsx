import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-gray-950 text-white rounded p-3 gap-3 md:p-6 md:gap-6">
                <Link to="/" className="text-lg md:text-2xl px-0 text-primary font-bold flex items-center"><img src="https://img.icons8.com/stickers/100/neighbour.png" alt="roommate" className='w-[30px] md:w-[50px] h-auto' />Book<p className='-ml-1 text-secondary '>Mate</p></Link>
                <nav className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/add-roommate" >Add to Find Roommate</Link>
                    <Link className="link link-hover" to="/browse-listing" >Browse Listing</Link>
                    <Link className="link link-hover" to="/my-listings" >My Listings</Link>
                </nav>
                <hr className='border border-dashed border-gray-500 w-full' />
                <nav>
                    <div className="grid grid-flow-col gap-4 md:gap-8">
                        <a href="https://www.facebook.com/tamim.muntakim.02" target='_blank'><FaFacebookSquare className='w-4 h-4 md:w-6 md:h-6' /></a>
                        <a href="https://www.linkedin.com/in/tamim-muntakim-51052625a/" target='_blank'><FaLinkedin className='w-4 h-4 md:w-6 md:h-6' /></a>
                        <a href="https://github.com/tamimMuntakim" target='_blank'><FaGithub className='w-4 h-4 md:w-6 md:h-6' /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;