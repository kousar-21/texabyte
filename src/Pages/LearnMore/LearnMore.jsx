import React, { useEffect } from 'react';

const LearnMore = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 🔥 scroll to top whenever route changes
    }, []);
    return (
        <div className="text-center mt-[80px] sm:mt-[100px] lg:mt-[120px] px-4">
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] text-black leading-tight">
                Learn The Powers
                <br />Of Code
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#484848] pt-3 max-w-2xl mx-auto">
                Coming Soon......
            </p>
        </div>
    );
};

export default LearnMore;