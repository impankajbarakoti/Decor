

import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import img2 from "../assets/img 2.webp";
import img3 from "../assets/img 3.webp";
import img4 from "../assets/img 4.webp";
import img5 from "../assets/img 5.webp";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title:
        "Modern Interior Design: 10 Best Tips for Creating Beautiful Interiors",
      author: "CMSMASTERS",
      image: img2,
    },
    {
      id: 2,
      title: "Design Style Quiz: What's Your Design Style?",
      author: "CMSMASTERS",
      image: img3,
    },
    {
      id: 3,
      title: "8 Modern Coastal Office Decor Ideas",
      author: "CMSMASTERS",
      image: img4,
    },
    {
      id: 4,
      title: "Interior Design of a Private House: What Needs to be Considered?",
      author: "CMSMASTERS",
      image: img5,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-stone-400 text-sm tracking-widest mb-8 font-semibold">
        FEATURED POSTS
      </h3>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="flex items-start space-x-5 group">
            <div className="flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              {/* 👇 Click pe BlogData page pe redirect hoga */}
              <Link to="/blogs">
                <h4 className="text-lg text-stone-800 leading-relaxed mb-2 group-hover:text-stone-600 transition-colors duration-200 hover:underline">
                  {post.title}
                </h4>
              </Link>

              <div className="text-stone-400 text-sm tracking-wide">
                <span>BY </span>
                <span className="text-stone-500">{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
