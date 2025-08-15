import React from "react";
import { Search, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const SideBar = () => {
  const categories = [
    "DECORATION",
    "HOUSES",
    "IDEAS & ADVICE",
    "INSPIRATION",
    "INTERIORS",
  ];

  const instagramPosts = [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <span className="text-stone-400 text-sm md:text-2xl tracking-wide relative top-[2px]">
          WELCOME TO MY BLOG
        </span>
      </div>
      {/* Author Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
            alt="Joan Robins"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        </div>

        <h3 className="text-stone-800 font-light text-lg mb-3">Joan Robins</h3>

        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          Interior designer and blogger. I share home and lifestyle inspiration
          for simple, relaxed living at home and beyond. You'll find home tours,
          advice and tips, style trends, and more. I love to help others how and
          where to find affordable, considered design.
        </p>

        <div className="flex justify-center space-x-3">
          <a
            href="#"
            className="text-stone-400 hover:text-stone-600 transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-stone-600 transition-colors"
          >
            <Facebook size={16} />
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-stone-600 transition-colors"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-stone-600 transition-colors"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h4 className="text-stone-400 text-xs tracking-widest mb-4 font-medium">
          SEARCH THE BLOG
        </h4>

        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH..."
            className="w-full px-4 py-3 text-sm border border-stone-200 rounded focus:outline-none focus:border-stone-400 transition-colors"
          />
          <Search className="absolute right-3 top-3 w-4 h-4 text-stone-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h4 className="text-stone-400 text-xs tracking-widest mb-6 font-medium">
          BROWSE CATEGORIES
        </h4>

        <div className="space-y-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="block text-stone-600 text-sm tracking-wide hover:text-stone-800 transition-colors duration-200 py-1"
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h4 className="text-stone-400 text-xs tracking-widest mb-6 font-medium">
          LATEST ON INSTAGRAM
        </h4>

        <div className="grid grid-cols-3 gap-2">
          {instagramPosts.map((image, index) => (
            <a
              key={index}
              href="#"
              className="block aspect-square rounded overflow-hidden hover:opacity-80 transition-opacity"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-stone-800 rounded-lg p-6 text-center text-white">
        <h4 className="text-xs tracking-widest mb-4 font-medium">
          INTERIOR DECORATING INSPIRATION
        </h4>

        <p className="text-sm text-stone-300 mb-6 leading-relaxed">
          Get the latest interior design tips and inspiration delivered to your
          inbox.
        </p>

        <button className="w-full bg-white text-stone-800 py-3 px-4 text-sm tracking-wide hover:bg-stone-100 transition-colors duration-300">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default SideBar;



