import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectImg from "../../assets/project/projects.jpg";
import projectImg2 from "../../assets/project/projects(2).jpg";
import projectImg3 from "../../assets/project/projects(3).jpg";
import projectImg4 from "../../assets/project/projects(4).jpg";
import left from "../../assets/project/left_arrow.png";
import right from "../../assets/project/right_arrow.png";

const Projects = () => {
    // Sample project data (4 items)
    const projects = [
        {
            id: 1,
            title: "infoTouch",
            image: projectImg,
            description:
                "In today’s fast-paced digital world, every idea deserves the chance to shine. We help you transform your vision into a powerful reality by combining creativity, innovation, and technology. Whether it’s building a modern website, designing engaging digital content, or developing smart solutions, our focus is on making your ideas stand out. From the very first concept to the final execution, we work hand in hand with you to craft experiences that are not only visually striking but also meaningful and effective.",
        },
        {
            id: 2,
            title: "TechWave",
            image: projectImg2,
            description:
                "We specialize in delivering end-to-end digital solutions that empower businesses to thrive. Our team focuses on blending innovation and functionality, ensuring every project is visually stunning and strategically effective.",
        },
        {
            id: 3,
            title: "SmartEdge",
            image: projectImg3,
            description:
                "SmartEdge is all about simplifying complex ideas into powerful, user-friendly experiences. Our work integrates modern design principles with seamless technology to drive real-world impact.",
        },
        {
            id: 4,
            title: "NextCore",
            image: projectImg4,
            description:
                "NextCore transforms your concepts into cutting-edge solutions. We focus on crafting projects that are scalable, innovative, and tailored to your business goals for the digital age.",
        },
    ];

    // Track current card index
    const [current, setCurrent] = useState(0);

    // Handle next and previous
    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrent((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const currentProject = projects[current];

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-[50px]">
            {/* Section Header */}
            <div className="text-center mt-20 md:mt-32 lg:mt-40">
                <span className="inline-block px-4 py-2 border border-[#00000020] rounded-[5px] text-base text-[#000000]">
                    Projects
                </span>
            </div>

            {/* Section content */}
            <div className="w-full mt-9">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-purple">
                    Our Project
                </h1>
                <p className="text-base text-[#484848] mt-6 leading-relaxed">
                    At Techsabyte, every project is a chance to turn vision into
                    reality. We partner with businesses to create smart solutions
                    that combine creativity, innovation, and technology. From idea
                    to execution, our focus is on building projects that are
                    impactful, scalable, and future-ready.
                </p>
            </div>

            {/* Pagination Card */}
            <div className="pt-8">
                <div className="flex flex-col md:flex-row border border-[#00000020] rounded-[8px] overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 p-6 flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProject.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-[6px] overflow-hidden w-full"
                            >
                                <img
                                    className="block w-full h-56 sm:h-64 md:h-[380px] object-cover"
                                    src={currentProject.image}
                                    alt={currentProject.title}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-full md:w-2/3 flex justify-center items-center pr-4 md:pr-9 px-4 md:px-0 pb-6 md:pb-0 relative">
                        {/* Animated Text */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProject.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-purple">
                                    {currentProject.title}
                                </h1>
                                <p className="mt-6 text-base text-[#484848] leading-relaxed">
                                    {currentProject.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* 🔥 Button container moved OUTSIDE motion.div to stay fixed */}
                        <div className="absolute bottom-4 right-6 flex items-center gap-6">
                            {/* ⬅️ Left Button */}
                            <button
                                onClick={handlePrev}
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-[#00000030] bg-white shadow-md hover:bg-purple hover:border-purple hover:shadow-lg transition-all duration-300 group"
                            >
                                <img
                                    src={left}
                                    alt="left_arrow"
                                    className="w-6 h-6 group-hover:invert"
                                />
                            </button>

                            {/* ➡️ Right Button */}
                            <button
                                onClick={handleNext}
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-[#00000030] bg-white shadow-md hover:bg-purple hover:border-purple hover:shadow-lg transition-all duration-300 group"
                            >
                                <img
                                    src={right}
                                    alt="right_arrow"
                                    className="w-6 h-6 group-hover:invert"
                                />
                            </button>
                        </div>
                        {/* 🔥 END of button section */}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Projects;
