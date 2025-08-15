import React from "react";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title:
        "Modern Interior Design: 10 Best Tips for Creating Beautiful Interiors",
      author: "CMSMASTERS",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: 2,
      title: "Design Style Quiz: What's Your Design Style?",
      author: "CMSMASTERS",
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: 3,
      title: "8 Modern Coastal Office Decor Ideas",
      author: "CMSMASTERS",
      image:
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: 4,
      title: "Interior Design of a Private House: What Needs to be Considered?",
      author: "CMSMASTERS",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
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
              <h4 className="text-lg text-stone-800 leading-relaxed mb-2 group-hover:text-stone-600 transition-colors duration-200">
                <a href="#" className="hover:underline">
                  {post.title}
                </a>
              </h4>

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
