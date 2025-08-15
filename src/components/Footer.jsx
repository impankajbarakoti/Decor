import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaInstagram, label: "INSTAGRAM" },
    { icon: FaPinterest, label: "PINTEREST" },
    { icon: FaFacebook, label: "FACEBOOK" },
  ];

  return (
    <footer className="bg-stone-100 text-stone-900 px-4 sm:px-6 py-16 relative overflow-hidden">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-3 right-6 w-12 h-12 rounded-sm flex items-center justify-center shadow-lg z-50
          bg-stone-700 text-white hover:bg-stone-600
          transition-all duration-300 ease-in-out
          ${
            atBottom
              ? "opacity-100 backdrop-blur-0"
              : "opacity-40 backdrop-blur-sm"
          }
        `}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-14 text-left">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.3em]">
            INTER<span className="inline-block mx-1">IO</span>CITY
          </h1>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0 gap-x-8 pt-10">
          {/* Pages */}
          <div className="sm:border-r sm:border-stone-300 sm:pr-6 text-left">
            <h3 className="text-lg md:text-xl font-medium mb-6">Pages</h3>
            <ul className="space-y-3 text-sm md:text-base tracking-wide">
              {[
                "ABOUT US",
                "BLOG PAGE",
                "CONTACTS",
                "SHOP",
                "IMAGE CREDITS",
              ].map((page, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-stone-600 transition-colors"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="sm:border-r sm:border-stone-300 sm:px-6 text-left">
            <h3 className="text-lg md:text-xl font-medium mb-6">Categories</h3>
            <ul className="space-y-3 text-sm md:text-base tracking-wide">
              {[
                "DECORATION",
                "INSPIRATION",
                "INTERIORS",
                "IDEAS & ADVICE",
                "HOUSES",
              ].map((cat, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-stone-600 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="sm:px-6 text-left">
            <h3 className="text-lg md:text-xl font-medium mb-6">Social</h3>
            <ul className="space-y-4 text-sm md:text-base tracking-wide">
              {socialLinks.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-stone-400 hover:text-stone-600 transition-colors" />
                  <a
                    href="#"
                    className="hover:text-stone-600 transition-colors"
                    aria-label={item.label}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-medium mb-6">
              Join Our Mailing List
            </h3>
            <p className="text-stone-400 text-sm md:text-base mb-6 leading-relaxed">
              Be the first to read our stories about interiors and design.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2 w-full"
            >
              <input
                type="email"
                placeholder="Subscribe"
                className="bg-stone-200 border border-stone-300 text-stone-900 text-sm md:text-base px-4 py-3 w-full outline-none rounded focus:border-stone-500 focus:ring-1 focus:ring-stone-500"
                required
              />
              <button
                type="submit"
                className="bg-stone-900 text-white hover:bg-stone-700 text-sm md:text-base px-6 py-3 rounded w-full sm:w-auto transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
