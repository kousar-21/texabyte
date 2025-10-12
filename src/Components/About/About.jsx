import React from "react";
import experience from "../../assets/about/experience.png";
import project from "../../assets/about/project.png";
import custom from "../../assets/about/custom.png";
import growth from "../../assets/about/growth.png";

const About = () => {
    const cards = [
        { img: experience, text: "3+ Years Experience" },
        { img: project, text: "50+ Projects" },
        { img: custom, text: "Custom Builds" },
        { img: growth, text: "Growth Focused" },
    ];

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-[50px]">
            {/* Section Title */}
            <div className="text-center mt-32">
                <span className="inline-block px-4 py-2 border border-[#00000020] rounded-[5px] text-base text-[#000000]">
                    About
                </span>
            </div>

            {/* Heading and Paragraph */}
            <div className="text-center lg:text-left mt-9">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
                    Who We Are
                </h1>
                <p className="text-base text-[#484848] mt-6 leading-relaxed">
                    At Techsabyte, we believe technology should empower ideas to thrive.
                    We craft scalable software, intuitive designs, and smart solutions
                    that help businesses grow in today’s fast-changing digital world. From
                    custom applications and SaaS products to branding, marketing, and
                    technology consulting, our focus is on delivering value that makes
                    your vision stand out.
                </p>
                <p className="text-base text-[#484848] mt-3 leading-relaxed">
                    From concept to deployment, we work closely with you to create
                    experiences that are not only functional but also meaningful and
                    impactful. At Techsabyte, every project is more than just code or
                    design — it’s an opportunity to tell your story and turn your ideas
                    into reality.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center border border-[#00000020] rounded-[8px] py-7 px-10 sm:px-16 md:px-20 h-full 
                       transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                    >
                        <img className="size-20" src={card.img} alt={card.text} />
                        <p className="text-[#484848] text-2xl sm:text-xl mt-5 whitespace-nowrap">
                            {card.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
