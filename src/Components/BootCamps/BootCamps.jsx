import React from 'react';
import bootcam from "../../assets/bootcamp/boy_image.jpg";
import rightArrow from "../../assets/bootcamp/right_arrow.png";
import aI from "../../assets/bootcamp/ai.png";
import design from "../../assets/bootcamp/design.png";
import c from "../../assets/bootcamp/c.png";
import python from "../../assets/bootcamp/python.png";
import security from "../../assets/bootcamp/security.png";
import robotics from "../../assets/bootcamp/robotic.png";

const BootCamps = () => {
    const cards = [
        { img: aI, text: "AI" },
        { img: design, text: "Design" },
        { img: c, text: "C" },
        { img: python, text: "Python" },
        { img: security, text: "Security" },
        { img: robotics, text: "Robotics" },
    ];

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-[50px]">
            {/* Header */}
            <div className="text-center mt-20 md:mt-32 lg:mt-40">
                <span className="inline-block px-4 py-2 border border-[#00000020] rounded-[5px] text-base text-[#000000]">
                    Bootcamps
                </span>
            </div>

            {/* Intro Text */}
            <div className="mt-9 w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
                    Our Bootcamps
                </h1>
                <p className="text-base text-[#484848] mt-6 leading-relaxed">
                    At Techsabyte, learning goes beyond theory. Our bootcamps are designed
                    to give students the skills that matter most in today’s fast-changing
                    world, combining hands-on projects, expert guidance, and real-world
                    problem-solving. From coding and design to robotics and AI, every
                    session is crafted to be practical, engaging, and adaptable.
                </p>
            </div>

            {/* Bootcamp Section */}
            <div className="pt-11">
                <div className="flex flex-col lg:flex-row border border-[#00000020] rounded-[8px] overflow-hidden">
                    {/* Image */}
                    <div className="lg:w-1/3 p-6">
                        <div className="rounded-[6px] overflow-hidden">
                            <img
                                className="block w-full h-64 sm:h-80 md:h-[435px] object-cover"
                                src={bootcam}
                                alt="Projects-img"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 w-full p-6 sm:p-8 lg:p-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
                            Acquire Knowledge, Build Skills, Achieve Excellence
                        </h1>
                        <p className="mt-6 sm:mt-8 text-base text-[#484848] leading-relaxed">
                            Education at Techsabyte is about action. Through a blend of
                            structured lessons, interactive practice, and real-world
                            applications, students gain not just knowledge but the confidence
                            to apply it. With a focus on collaboration and creativity, every
                            bootcamp experience equips learners to push boundaries and stand
                            out in the digital age.
                        </p>

                        {/* Button */}
                        <button className="mt-8 sm:mt-10 btn flex items-center gap-2 mx-auto lg:mx-0 shadow-none font-normal rounded-[4px] border border-transparent hover:border-black bg-[#8584EF20] dark:text-black py-[24px] px-[24px] sm:px-5 transition-all duration-300">
                            Learn More
                            <img className="w-8 h-8" src={rightArrow} alt="right-arrow" />
                        </button>


                        {/* Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-5 mt-10 sm:mt-12 justify-items-center">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center border border-[#00000020] rounded-[5px] h-[70px] w-[110px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                                >
                                    <img className="w-6 h-6" src={card.img} alt={card.text} />
                                    <p className="text-[#484848] text-base whitespace-nowrap">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootCamps;
