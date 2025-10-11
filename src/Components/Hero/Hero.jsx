import React from "react";
import white from "../../assets/hero_page/message_white.png";
import black from "../../assets/hero_page/message_black.png";

const Hero = () => {
  return (
    <div className="text-center mt-[80px] sm:mt-[100px] lg:mt-[120px] px-4">
      <h1 className="text-3xl sm:text-5xl lg:text-[64px] text-black leading-tight">
        Code That Powers
        <br /> Tomorrow
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-[#484848] pt-3 max-w-2xl mx-auto">
        We design intelligent, future-ready software for modern challenges.
      </p>

      {/* start a conversation */}
      <div className="flex justify-center items-center mt-8 sm:mt-10 lg:mt-12">
        <button className=" bg-purple hover:bg-[#00000020] rounded-[5px] flex items-center text-white hover:text-purple text-sm sm:text-base py-2 sm:py-[12.5px] px-4 sm:px-[20px] group">
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 mr-2 group-hover:hidden"
            src={white}
            alt="message-icon"
          />
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 mr-2 hidden group-hover:block"
            src={black}
            alt="message-icon"
          />
          Start a Conversation
        </button>
      </div>


    </div>
  );
};

export default Hero;
