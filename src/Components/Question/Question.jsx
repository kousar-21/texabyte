import React from 'react';

const Question = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-[50px]">
      {/* Heading and Description */}
      <div className="flex flex-col lg:flex-row justify-between mt-28 gap-8 lg:gap-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
          Do you have <br />
          any questions?
        </h1>
        <p className="text-base sm:text-lg text-[#484848] py-2 leading-relaxed">
          We’re here to help. Whether you want to learn more about our services,<br /> 
          bootcamps, or upcoming projects, our team is ready to guide you. Send us a <br /> 
          message and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Send Message Button */}
      <div className="text-start mt-14">
        <a href="https://wa.me/8801741056604" target='_blank'>
        <span className="inline-block border border-[#00000005] rounded-[5px] text-base hover:border hover:border-black bg-[#8584EF20] dark:text-black py-[10px] px-[14px] sm:px-5">
          Send a message
        </span>
        </a>
      </div>
    </div>
  );
};

export default Question;
