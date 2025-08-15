
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import BlogsData from "./pages/BlogsData";
import FollowUs from "./FollowUs";

const Blogs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const prevCard = useRef(null);

  useEffect(() => {
    prevCard.current = hoveredCard;
  }, [hoveredCard]);

  return (
    <div className="bg-stone-100 py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-gray-900 text-center">
          Our Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogsData.map((blog, idx) => (
            <div
              key={blog.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative p-6 bg-white rounded-xl border border-orange-300 cursor-pointer transition-transform duration-300 ease-in-out shadow-md
                ${hoveredCard === idx ? "scale-105 shadow-xl" : "scale-100"}
              `}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-44 rounded-lg mb-4 transition-transform duration-300"
              />
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  state={blog}
                  className="text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FollowUs />
    </div>
  );
};

export default Blogs;
