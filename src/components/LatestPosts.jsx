
import React from "react";

const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Design the "Big Girl" Bedroom of Your Dreams',
      excerpt:
        "Spend your dollars on the things that will make your bedroom instantly look more mature. Here are my three tips for achieving the big girl bedroom of your dreams.",
      image:
        "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "DECEMBER 1, 2024",
      category: "HOUSES",
    },
    {
      id: 2,
      title:
        "Modern Interior Design: 10 Best Tips for Creating Beautiful Interiors",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2",
      date: "DECEMBER 1, 2024",
      category: "DECOR & ADVICE",
    },
    {
      id: 3,
      title: "Monochromatic Living Room Ideas",
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2",
      date: "DECEMBER 1, 2024",
      category: "DECOR & ADVICE",
    },
    {
      id: 4,
      title: "Minimalist Interior Design Ideas",
      image:
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2",
      date: "DECEMBER 1, 2024",
      category: "INSPIRATION",
    },
    {
      id: 5,
      title: "Modern Hallway Design Ideas",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2",
      date: "DECEMBER 1, 2024",
      category: "INTERIORS",
    },
  ];

  const morePosts = [
    {
      id: 6,
      title: "Room Tour: Living, Loving, and Dining",
      excerpt:
        "When it comes to decorating, Amy Carrillo believes a house is not a home until you add the pieces that truly matter to you.",
      image:
        "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "FEBRUARY 8, 2025",
      category: "INTERIORS",
      author: "cmsmasters",
    },
    {
      id: 7,
      title: "Decorating with Natural Tones",
      image:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "FEBRUARY 5, 2025",
      category: "DECOR & ADVICE",
    },
    {
      id: 8,
      title: "Creating a Cozy Reading Nook",
      image:
        "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "FEBRUARY 3, 2025",
      category: "INSPIRATION",
    },
    {
      id: 9,
      title: "Color Blocking in Small Spaces",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "FEBRUARY 1, 2025",
      category: "HOUSES",
    },
    {
      id: 10,
      title: "How to Mix Vintage with Modern",
      image:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "JANUARY 28, 2025",
      category: "INTERIORS",
    },
  ];

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);
  const moreFeatured = morePosts[0];
  const additionalPosts = morePosts.slice(1);

  return (
    <div className="px-4 md:px-0">
      {/* --- First Section --- */}
      <div className="mb-10">
        <h2 className="text-stone-800 text-2xl md:text-3xl font-semibold tracking-widest mb-2">
          LATEST POSTS
        </h2>
      </div>

      {/* Featured Post */}
      <article className="mb-16">
        <div className="relative rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-[28rem] sm:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm tracking-wide mb-4">
              <span>{featuredPost.date}</span>
              <span>{featuredPost.category}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-light mb-4">
              {featuredPost.title}
            </h3>
            <p className="text-base sm:text-lg mb-6">{featuredPost.excerpt}</p>
            <button className="border border-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base tracking-wide hover:bg-white hover:text-stone-800 transition-all duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </article>

      {/* Grid of 4 Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {regularPosts.map((post) => (
          <article key={post.id} className="group">
            <div className="relative rounded-lg overflow-hidden shadow-md mb-5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-3">
              <div className="flex gap-4 text-sm text-stone-400">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h4 className="text-xl sm:text-2xl text-stone-800 font-light group-hover:text-stone-600 transition-colors duration-200">
                <a href="#" className="hover:underline">
                  {post.title}
                </a>
              </h4>
            </div>
          </article>
        ))}
      </div>

      {/* --- Second Section --- */}
      <div className="mb-10">
        <h2 className="text-stone-800 text-2xl md:text-3xl font-semibold tracking-widest mb-4">
          MORE INSPIRATION
        </h2>
      </div>

      {/* Featured-style post */}
      <article className="mb-16">
        <div className="relative rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src={moreFeatured.image}
            alt={moreFeatured.title}
            className="w-full h-[28rem] sm:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm tracking-wide mb-4">
              <span>{moreFeatured.date}</span>
              <span>{moreFeatured.category}</span>
              <span>By {moreFeatured.author}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-light mb-4">
              {moreFeatured.title}
            </h3>
            <p className="text-base sm:text-lg mb-6">{moreFeatured.excerpt}</p>
            <button className="border border-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base tracking-wide hover:bg-white hover:text-stone-800 transition-all duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </article>

      {/* 4 more posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {additionalPosts.map((post) => (
          <article key={post.id} className="group">
            <div className="relative rounded-lg overflow-hidden shadow-md mb-5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-3">
              <div className="flex gap-4 text-sm text-stone-400">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h4 className="text-xl sm:text-2xl text-stone-800 font-light group-hover:text-stone-600 transition-colors duration-200">
                <a href="#" className="hover:underline">
                  {post.title}
                </a>
              </h4>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mb-16">
        <button className="bg-stone-800 text-white px-8 py-3 text-sm sm:text-base tracking-wide hover:bg-stone-700 transition-all duration-300">
          VIEW MORE POSTS
        </button>
      </div>
    </div>
  );
};

export default LatestPosts;
