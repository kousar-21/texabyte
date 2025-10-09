import React from 'react';
import navIcon from "../../assets/nab/nav_icon.png"

const Navbar = () => {
    const links = <>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100 pt-[50px] px-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#000000] text-base">
                        {links}
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#000000] text-base'>TechsaByte</h3>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">

                <img className='text-[#000000] size-4 mr-[8.5px]' src={navIcon} alt="TechsaByte-Icon" />
                <ul className="menu menu-horizontal px-1 text-[#000000] text-base">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#00000010] border-none hover:bg-gray-300">Set Meeting</a>
            </div>
        </div>
    );
};

export default Navbar;