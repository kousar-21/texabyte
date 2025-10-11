import React from 'react';
import projectImg from '../../assets/project/projects.jpg'
import left from '../../assets/project/left_arrow.png'
import right from '../../assets/project/right_arrow.png'


const Projects = () => {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-[50px] mb-55">
            <div>
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
                        At Techsabyte, every project is a chance to turn vision into reality. We partner with businesses to create smart solutions that combine creativity, innovation, and technology. From idea to execution, our focus is on building projects that are impactful, scalable, and future-ready.
                    </p>
                </div>
            </div>
            <div className='pt-8'>
                <div className="flex border border-[#00000020] rounded-[8px]">
                    <div className="w-1/3 p-6">
                        <div className="rounded-[6px] overflow-hidden">
                            <img
                                className="block w-full h-48 sm:h-64 md:h-80 object-cover"
                                src={projectImg}
                                alt="Projects-img"
                            />
                        </div>
                    </div>

                    <div className="w-2/3 flex justify-center items-center pr-9">
                        <div>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-purple'>infoTouch</h1>
                            <p className='mt-6 text-base text-[#484848]'>In today’s fast-paced digital world, every idea deserves the chance to shine. We help you transform your vision into a powerful reality by combining creativity, innovation, and technology. Whether it’s building a modern website, designing engaging digital content, or developing smart solutions, our focus is on making your ideas stand out.From the very first concept to the final execution, we work hand in hand with you to craft experiences that are not only visually striking but also meaningful and effective. </p>
                            <div className='flex justify-end items-end mt-10'>
                                <div className='flex gap-5'>
                                    <img className='size-10' src={left} alt="left_arrow" />
                                    <img className='size-10' src={right} alt="right_arrow" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;