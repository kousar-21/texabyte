import React from 'react';
import navIcon from "../../assets/nab/logo.png";
import { useLocation, useNavigate } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();


  //  New function to handle scrolling between pages
  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } }); // navigate home first
    }
  };

  // 🔥 Added state to manage active section
  const [activeSection, setActiveSection] = React.useState(null);

  // 🔥 Added function to set active section on click
  const handleSectionClick = (section) => {
    setActiveSection(section);

    setTimeout(() => {
      handleScroll(section);
    }, 0);
  };

  // 🔥 Updated links with active + hover styles
  const links = (
    <>
      <li>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => handleSectionClick("about")} // 🔥 changed
          className={`cursor-pointer px-3 py-2 rounded-[4px] transition-colors duration-300 
            ${activeSection === "about"
              ? "bg-[#8584EF] text-white"  // 🔥 active state color
              : "hover:bg-[#8584EF20]"}   // 🔥 hover color
          `}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => handleSectionClick("services")} // 🔥 changed
          className={`cursor-pointer px-3 py-2 rounded-[4px] transition-colors duration-300 
            ${activeSection === "services"
              ? "bg-[#8584EF] text-white"
              : "hover:bg-[#8584EF20]"}
          `}
        >
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => handleSectionClick("projects")} // 🔥 changed
          className={`cursor-pointer px-3 py-2 rounded-[4px] transition-colors duration-300 
            ${activeSection === "projects"
              ? "bg-[#8584EF] text-white"
              : "hover:bg-[#8584EF20]"}
          `}
        >
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => handleSectionClick("contact")} // 🔥 changed
          className={`cursor-pointer px-3 py-2 rounded-[4px] transition-colors duration-300 
            ${activeSection === "contact"
              ? "bg-[#8584EF] text-white"
              : "hover:bg-[#8584EF20]"}
          `}
        >
          Contact
        </ScrollLink>
      </li>
    </>
  );

  // existing logo click handler
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="navbar border-b border-b-gray-300 bg-base-100 dark:bg-white pt-[20px] sm:pt-[30px] lg:pt-[50px] px-4 sm:px-[30px] lg:px-[50px]">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown dark:text-black">
          <div tabIndex={0} role="button" className="pr-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#000000] dark:bg-[#E7E6FC] text-base"
          >
            {links}
          </ul>
        </div>

        {/* Brand Name  — clickable  */}
        <div onClick={handleHomeClick}>
          <h3 className="text-[#000000] text-base">
            TechsaByte
          </h3>
        </div>


      </div>

      {/* Navbar Center (Hidden on small) */}
      <div className="navbar-center hidden md:flex">
        <img
          onClick={handleHomeClick}
          className="text-[#8584EF] size-8 mr-[8.5px]"
          src={navIcon}
          alt="TechsaByte-Icon"
        />
        <ul className="menu menu-horizontal px-1 text-[#000000] text-base">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end ">
        <a
          href="https://wa.me/8801741056604" target='_blank'
          className='rounded-[4px] hover:border hover:border-black bg-[#8584EF20] dark:text-black py-[10px] px-[14px] sm:px-5'
        >
          Set Meeting
        </a>
      </div>
    </div>
  );
};

export default Navbar;
