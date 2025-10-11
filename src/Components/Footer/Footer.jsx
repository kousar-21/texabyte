import React from 'react';
import logo from '../../assets/footer/footer_icon.png';
import fb from '../../assets/footer/facebook.png';
import insta from '../../assets/footer/instragram.png';
import linkedin from '../../assets/footer/linkedin.png';
import whatsapp from '../../assets/footer/whatsapp.png';

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-[50px]">
      {/* Divider */}
      <div className="border-b-2 border-gray-300 mt-20 mb-14"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1st Column */}
        <div className="flex flex-col">
          <img className="w-24 sm:w-28 md:w-32 h-auto" src={logo} alt="techsabyte-icon" />

          {/* Navigation Links */}
          <div className="lg:text-base text-accent grid grid-cols-2 lg:grid-cols-4 mt-8 gap-4">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 text-accent mt-8 gap-6">
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-base mt-2">info@techsabyte.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-base mt-2">+880176-45826</p>
            </div>
          </div>
        </div>

        {/* 2nd Column: Social Icons */}
        <div className="flex justify-center items-start md:items-center gap-6 mt-10 md:mt-0">
          <img className="w-12 h-12" src={fb} alt="facebook" />
          <img className="w-12 h-12" src={insta} alt="instagram" />
          <img className="w-12 h-12" src={linkedin} alt="linkedin" />
          <img className="w-12 h-12" src={whatsapp} alt="whatsapp" />
        </div>

        {/* 3rd Column */}
        <div className="flex flex-col items-center text-center mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-accent">
            Ready to start your <br /> project with us?
          </h1>
          <div className="mt-8">
            <a
              href="https://www.whatsapp.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00000010] rounded-md hover:bg-[#00000030] py-3 px-5 sm:px-6"
            >
              Set Meeting
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-secondary text-base py-10">
        © 2025 Techsabyte. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
