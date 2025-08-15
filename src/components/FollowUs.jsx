
import React from "react";


import img12 from "../assets/img 12.webp"
import img13 from "../assets/13.webp"
import img14 from "../assets/img 14.webp";
import img15 from "../assets/img 15.webp";
import img16 from "../assets/img 16.webp";
import img17 from "../assets/img 17.webp";




const followCards = [
  { title: "Post 1", image: img12 },
  { title: "Post 2", image: img13 },
  { title: "Post 3", image: img14 },
  { title: "Post 4", image: img15 },
  { title: "Post 5", image: img16 },
  { title: "Post 6", image: img17},
];

const FollowUs = () => {
  return (
    <div className="bg-stone-100 w-full py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-center text-stone-400 text-base sm:text-lg md:text-xl font-light tracking-widest uppercase mb-10 sm:mb-12">
        FOLLOW US @INTERIOCITY
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {followCards.map((card, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden group rounded-sm"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
