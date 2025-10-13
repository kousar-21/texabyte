import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectImg from "../../assets/project/1.jpg";
import projectImg2 from "../../assets/project/2.jpg";
import projectImg3 from "../../assets/project/3.jpg";
import left from "../../assets/project/left_arrow.png";
import right from "../../assets/project/right_arrow.png";

const Projects = () => {
    // Sample project data (4 items)
    const projects = [
        {
            id: 1,
            title: "Video Editing Portfolio Website",
            image: projectImg,
            description:
                "In today’s fast-paced digital world, every idea deserves the chance to shine. This stylish and responsive portfolio website was designed to help video editors and creators showcase their work with elegance and clarity. By combining creativity, innovation, and technology, the design delivers a seamless user experience from highlighting services and projects to building client connections. The result is a visually captivating and functional platform that turns creative vision into a digital reality.",
        },
        {
            id: 2,
            title: "Modern Responsive Portfolio Website",
            image: projectImg2,
            description:
                "EA Portal is a modern and responsive portfolio website designed to transform creative ideas into stunning digital experiences. Built with a sleek interface and intuitive structure, it highlights projects, services, and testimonials in a clean, professional way. The design focuses on usability, performance, and visual impact, offering a seamless experience across all devices. From concept to final execution, the goal was to craft a platform that reflects innovation, clarity, and creativity at every interaction.",
        },
        {
            id: 3,
            title: "Modern Blog Website",
            image: projectImg3,
            description:
                "This modern and responsive blog website is designed to provide a seamless reading experience while maintaining a clean and visually appealing layout. It blends creativity and functionality to help writers, creators, and brands share their stories effortlessly. With a focus on typography, readability, and smooth navigation, the design ensures every article stands out. From engaging visuals to dynamic post management, the website delivers an elegant platform for storytelling, inspiration, and digital presence.",
        }
    ];

    // Track current card index
    const [current, setCurrent] = useState(0);
    const [isUserInteracted, setIsUserInteracted] = useState(false);

    // Handle next and previous
    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
        setIsUserInteracted(true);
    };

    const handlePrev = () => {
        setCurrent((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
        setIsUserInteracted(true);
    };

    const currentProject = projects[current];


    // 🔥 Modified autoplay logic (pauses when user interacts, resumes after 5s)
    useEffect(() => {
        let autoPlayTimer;
        let resumeTimer;

        if (isUserInteracted) {
            // Wait 5s after interaction, then resume autoplay
            resumeTimer = setTimeout(() => {
                setIsUserInteracted(false);
            }, 5000);
        } else {
            // Autoplay every 5s
            autoPlayTimer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % projects.length);
            }, 5000);
        }

        return () => {
            clearInterval(autoPlayTimer);
            clearTimeout(resumeTimer);
        };
    }, [isUserInteracted, projects.length]);
    // 🔥 END autoplay logic


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
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
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
                    <div className="w-full md:w-1/2 lg:w-1/3 p-6 flex justify-center items-center">
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

                    <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center items-center pr-4 md:pr-9 px-4 md:px-0 pb-6 md:pb-0 relative">
                        {/* Animated Text */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProject.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
                                    {currentProject.title}
                                </h1>
                                <p className="mt-6 text-base text-[#484848] leading-relaxed">
                                    {currentProject.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* 🔥 Button container moved OUTSIDE motion.div to stay fixed */}
                        {/* <div className="absolute bottom-4 right-6 flex items-center gap-6"> */}
                        {/* ⬅️ Left Button */}
                        {/* <button
                                onClick={handlePrev}
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border transition-all duration-300 hover:bg-[#8584EF20] hover:border-accent hover:shadow-lg"
                            >
                                <img
                                    src={left}
                                    alt="left_arrow"
                                    className="w-7 h-7"
                                />
                            </button> */}

                        {/* ➡️ Right Button */}
                        {/* <button
                                onClick={handleNext}
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border transition-all duration-300 hover:bg-[#8584EF20] hover:border-accent hover:shadow-lg"
                            >
                                <img
                                    src={right}
                                    alt="right_arrow"
                                    className="w-7 h-7"
                                />
                            </button>
                        </div> */}

                        {/* 🔥 Navigation Buttons */}
                        <div className="absolute bottom-4 right-6 flex items-center gap-6">
                            <button
                                onClick={handlePrev}
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border transition-all duration-300 hover:bg-[#8584EF20] hover:border-accent hover:shadow-lg"
                            >
                                <img src={left} alt="left_arrow" className="w-7 h-7" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border transition-all duration-300 hover:bg-[#8584EF20] hover:border-accent hover:shadow-lg"
                            >
                                <img src={right} alt="right_arrow" className="w-7 h-7" />
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
