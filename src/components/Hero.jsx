import React from "react";
import FeaturedPosts from "./FeaturedPosts";

const Hero = () => {
  return (
    <div className="min-h-screen bg-stone-100 p-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left: Hero Section */}
        <div className="w-full lg:w-2/3">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-full">
            <img
              src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
              alt="Design of the Week: Renovated Barn"
              className="w-full h-[500px] md:h-[600px] lg:h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="text-white">
                <div className="flex items-center space-x-6 text-sm tracking-wide mb-5">
                  <span className="text-stone-200">FEBRUARY 1, 2025</span>
                  <span className="text-stone-200">HOUSES</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-snug">
                  Design of the Week: Renovated Barn
                </h2>

                <button className="border border-white px-8 py-3 text-base tracking-wide hover:bg-white hover:text-stone-800 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: FeaturedPosts */}
        <div className="w-full lg:w-1/3">
          <FeaturedPosts />
        </div>
      </div>
    </div>
  );
};

export default Hero;
