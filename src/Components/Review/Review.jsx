import React from "react";
import { motion } from "framer-motion";
import quotation from "../../assets/reviews/quotation.png";
import woman1 from "../../assets/reviews/woman-1.png";
import man1 from "../../assets/reviews/man-1.jpg";
import woman2 from "../../assets/reviews/woman-2.jpg";

const reviewsData = [
  {
    id: 1,
    quote:
      "Joining this bootcamp was one of the best decisions I made. The program combined creativity with practical learning, and the projects really helped me understand how to apply the skills in real situations. The supportive environment made the whole journey inspiring and motivating.",
    author: "Eva Jaman",
    title: "Junior Software Developer",
    image: woman1,
  },
  {
    id: 2,
    quote:
      "I approached them for a complete digital solution, and they delivered beyond expectations. They created a seamless system tailored to my project needs, saving us time and increasing efficiency. What impressed me most was their problem-solving approach—every challenge had a creative and effective solution. Truly reliable professionals!",
    author: "Eva Jaman",
    title: "Junior Software Developer",
    image: woman2,
  },
  {
    id: 3,
    quote:
      "From the very beginning, the team showed professionalism and dedication. They designed engaging digital content for my brand that helped me stand out online. Every detail, from visuals to messaging, was carefully crafted to match my goals. Their ability to combine creativity with strategy makes them one of the best teams I’ve collaborated with.",
    author: "Farhan Ahmed",
    title: "Founder of Creative Hive",
    image: man1,
  },
  {
    id: 4,
    quote:
      "From the very beginning, the team showed professionalism and dedication. They designed engaging digital content for my brand that helped me stand out online. Every detail, from visuals to messaging, was carefully crafted to match my goals. Their ability to combine creativity with strategy makes them one of the best teams I’ve collaborated with.",
    author: "Farhan Ahmed",
    title: "Founder of Creative Hive",
    image: man1,
  },
  {
    id: 5,
    quote:
      "Joining this bootcamp was one of the best decisions I made. The program combined creativity with practical learning, and the projects really helped me understand how to apply the skills in real situations. The supportive environment made the whole journey inspiring and motivating.",
    author: "Moumita Mou",
    title: "Data Analyst & Project Lead",
    image: woman1,
  },
  {
    id: 6,
    quote:
      "I approached them for a complete digital solution, and they delivered beyond expectations. They created a seamless system tailored to my project needs, saving us time and increasing efficiency. What impressed me most was their problem-solving approach—every challenge had a creative and effective solution. Truly reliable professionals!",
    author: "Moumita Mou",
    title: "Data Analyst & Project Lead",
    image: woman2,
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
          Reviews
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
              className="min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] bg-white rounded-xl border border-gray-200 p-6 relative shadow-sm flex flex-col justify-between h-[420px]"
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
              <div className="mt-6 mx-10 border border-gray-200 rounded-lg p-5 bg-white flex-1 flex items-center">
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
