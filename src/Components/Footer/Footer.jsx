import React from 'react';
import logo from '../../assets/footer/footer_logo.png';
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
          <div className="lg:text-base text-primary flex items-center mt-8 gap-4">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 text-primary mt-8 gap-6">
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-base mt-2">techsabytehelp03@gmail.com</p>
            </div>
            <div className='ml-0 lg:ml-3'>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-base mt-2">+88017 4105 6604</p>
            </div>
          </div>
        </div>

        {/* 2nd Column: Social Icons */}
        <div className="flex justify-center items-start md:items-center gap-6 mt-10 md:mt-0">
          <a href="https://web.facebook.com/profile.php?id=61575607538900" target='_blank'>
            <img className="w-12 h-12" src={fb} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/techsabyte?igsh=ejFhZnR5ZHU5OXk5" target='_blank'>
            <img className="w-12 h-12" src={insta} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/106741994/admin/dashboard/" target='_blank'>
            <img className="w-12 h-12" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://wa.me/8801741056604" target='_blank'>
            <img className="w-12 h-12" src={whatsapp} alt="whatsapp" />
          </a>
        </div>

        {/* 3rd Column */}
        <div className="flex flex-col items-center text-center mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
            Ready to start your <br /> project with us?
          </h1>
          <div className="mt-12">
            <a
              href="https://wa.me/8801741056604"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-[4px] hover:border hover:border-black  bg-[#8584EF20] dark:text-black py-[12px] px-[14px] sm:px-5"
            >
              Hire The Best Team
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
