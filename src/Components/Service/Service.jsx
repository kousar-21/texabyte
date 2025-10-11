import React from 'react';
import software from "../../assets/service/software.png";
import design from "../../assets/service/design.png";
import idea from "../../assets/service/idea.png";
import marketing from "../../assets/service/marketing.png";
import saas from "../../assets/service/saas.png";
import technology from "../../assets/service/technology.png";

const services = [
    {
        img: software,
        title: "Custom Software",
        desc: "Scalable and tailored software solutions built to match business needs, spanning web, mobile, and desktop platforms.",
    },
    {
        img: design,
        title: "Design and UX",
        desc: "User-focused designs crafted to enhance usability, increase engagement, and deliver seamless digital experiences.",
    },
    {
        img: marketing,
        title: "Marketing",
        desc: "Impactful marketing strategies designed to grow brand presence, attract the right audience, and drive measurable success.",
    },
    {
        img: technology,
        title: "Technology Consulting",
        desc: "Expert technology guidance that empowers smarter decisions, supports innovation, and strengthens competitive advantage.",
    },
    {
        img: idea,
        title: "Branding & Creative Solutions",
        desc: "Strong visual identities and creative content developed to reflect brand values and foster meaningful audience connections.",
    },
    {
        img: saas,
        title: "SaaS Product Development",
        desc: "Efficient, market-ready SaaS products engineered to cover the entire journey from concept to deployment and beyond.",
    },
]

const Service = () => {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-[50px]">
            {/* Section Header */}
            <div className="text-center mt-20 md:mt-32 lg:mt-40">
                <span className="inline-block px-4 py-2 border border-[#00000020] rounded-[5px] text-base text-[#000000]">
                    Services
                </span>
            </div>

            {/* Main Content */}
            <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Left Text Section */}
                <div className="lg:w-1/3 w-full">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-accent">
                        Our Services
                    </h1>
                    <p className="text-base text-[#484848] mt-6 leading-relaxed">
                        Techsabyte transforms ideas into powerful digital solutions, blending creativity, innovation, and technology.
                    </p>
                </div>

                {/* Right Service Cards */}
                <div className="lg:w-2/3 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="py-8 px-6 border border-[#00000020] rounded-[8px] hover:shadow-md transition-all duration-300"
                            >
                                <img
                                    className="mb-[18px] w-10 h-10 mx-auto sm:mx-0"
                                    src={service.img}
                                    alt={service.title}
                                />
                                <h1 className="text-accent text-xl sm:text-2xl mb-[18px]">
                                    {service.title}
                                </h1>
                                <p className="text-secondary text-base leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
