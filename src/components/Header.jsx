
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" }, 
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl tracking-[0.3em] font-light text-stone-800">
            INTERIOCITY
          </h1>
        </div>

        {/* Hamburger & Navigation */}
        <div className="flex justify-center">
          {/* Hamburger button - visible on small screens only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-pitchBlack p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close icon (X)
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                />
              ) : (
                // Hamburger icon
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation - horizontal on md+ */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block pb-6`}
        >
          <ul className="flex flex-col md:flex-row justify-center md:space-x-12 space-y-4 md:space-y-0 text-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                {/* Update the <a> tag to <Link> for routing */}
                <Link
                  to={item.href}
                  className="text-stone-600 text-lg tracking-wide hover:text-stone-800 transition-colors duration-200 flex items-center justify-center"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z
                        clipRule=evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
