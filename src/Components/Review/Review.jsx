import React from "react";
import { motion } from "framer-motion";
import quotation from "../../assets/reviews/quotation.png";
import mosarraf from "../../assets/nahida/mosarrof.jpeg"
import we from "../../assets/nahida/we.jpeg"
import emi from "../../assets/nahida/emi.jpeg"
import nahida from "../../assets/nahida/nahida.jpg"

const reviewsData = [
  {
    id: 1,
    quote:
      "Working with Techsabyte was a transformative experience. Their team not only understood our brand vision but elevated it with creative precision. Since launch, we’ve seen a notable boost in engagement, and their cohesive design approach strengthened our presence across all platforms. Truly impressed",
    author: "Mosarof Hossain",
    title: "Founder & CEO, FVE Service",
    image: mosarraf,
  },
  {
    id: 2,
    quote:
      "Techsabyte brings exceptional creativity and professionalism to every project. They deeply understood our brand goals and translated them into effective, high-quality solutions. The process was smooth, collaborative, and results-driven. Truly a team you can count on!",
    author: "Ethan Collins",
    title: "Entrepreneur & Digital Strategist",
    image: we,
  },
  {
    id: 3,
    quote:
      "Partnering with Techsabyte was a truly rewarding experience. Their team brought energy, clarity, and full commitment to our project from the start. They grasped our goals quickly and delivered results that surpassed our expectations. Skilled, meticulous, and highly professional. Strongly recommended!",
    author: "Nadia Hasan",
    title: "Business Consultant",
    image: nahida,
  },
  {
    id: 4,
    quote:
      "Techsabyte is a highly creative and ambitious agency. They execute projects with precision, closely following client instructions and paying attention to every detail. Collaborating with their team has been a pleasure, always professional, reliable, and fully committed to delivering excellence. Highly recommended!",
    author: "Emilia Afet",
    title: "CEO, EA Portal",
    image: emi,
  },
];

const Review = () => {
  // Duplicate the data twice to create a smooth infinite loop
  const repeatedData = [...reviewsData, ...reviewsData];

  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-[50px] overflow-hidden">
      {/* Section Header */}
      <div className="text-center mt-20 md:mt-32 lg:mt-40">
        <span className="inline-block px-4 py-2 border border-[#00000020] rounded-[5px] text-base text-black">
          Testimonial
        </span>
      </div>

      {/* Auto Scroll */}
      <div className="mt-14 overflow-visible">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }} // 👈 changed from -50% to -100%
          transition={{
            ease: "linear",
            duration: 40, // slower = smoother
            repeat: Infinity,
          }}
        >
          {repeatedData.map((review, index) => (
            <div
              key={index}
              className="min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] bg-white rounded-xl border border-gray-200 p-6 relative shadow-sm flex flex-col justify-between"
            >
              {/* Quotation icon */}
              <div className="absolute -top-5 left-6 border border-accent bg-[#8584EF20] w-10 h-10 rounded-full flex items-center justify-center z-10">
                <img
                  src={quotation}
                  alt="quotation mark"
                  className="w-5 h-5 opacity-70"
                />
              </div>

              {/* Review content */}
              <div className="mt-6 mx-5 border border-gray-200 rounded-lg p-5 bg-white flex-1 flex items-center">
                <p className="text-gray-700 text-sm md:text-sm leading-relaxed text-justify">
                  {review.quote}
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    {review.author}
                  </p>
                  <p className="text-gray-500 text-xs">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
