// import React, { useState, useEffect } from "react";
// import { ChevronUp } from "lucide-react";
// import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";

// const Footer = () => {
//   const [atBottom, setAtBottom] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolledToBottom =
//         window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
//       setAtBottom(scrolledToBottom);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const socialLinks = [
//     { icon: FaInstagram, label: "INSTAGRAM" },
//     { icon: FaPinterest, label: "PINTEREST" },
//     { icon: FaFacebook, label: "FACEBOOK" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Newsletter Form Submitted:", formData);
//     // Clear form
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <footer className="bg-stone-100 text-stone-900 px-4 sm:px-6 py-16 relative overflow-hidden">
//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//         className={`fixed bottom-3 right-6 w-12 h-12 rounded-sm flex items-center justify-center shadow-lg z-50
//           bg-stone-700 text-white hover:bg-stone-600
//           transition-all duration-300 ease-in-out
//           ${
//             atBottom
//               ? "opacity-100 backdrop-blur-0"
//               : "opacity-40 backdrop-blur-sm"
//           }
//         `}
//       >
//         <ChevronUp className="w-5 h-5" />
//       </button>

//       <div className="max-w-6xl mx-auto">
//         {/* Logo */}
//         <div className="mb-14 text-left">
//           <h1 className="text-3xl md:text-4xl font-light tracking-[0.3em]">
//             INTER<span className="inline-block mx-1">IO</span>CITY
//           </h1>
//         </div>

//         {/* Footer Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0 gap-x-8 pt-10">
//           {/* Pages */}
//           <div className="sm:border-r sm:border-stone-300 sm:pr-6 text-left">
//             <h3 className="text-lg md:text-xl font-medium mb-6">Pages</h3>
//             <ul className="space-y-3 text-sm md:text-base tracking-wide">
//               {["ABOUT US", "BLOG PAGE", "CONTACTS"].map((page, i) => (
//                 <li key={i}>
//                   <a href="/about" className="hover:text-stone-600 transition-colors">{page}</a>
                 

//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Categories */}
//           <div className="sm:border-r sm:border-stone-300 sm:px-6 text-left">
//             <h3 className="text-lg md:text-xl font-medium mb-6">Categories</h3>
//             <ul className="space-y-3 text-sm md:text-base tracking-wide">
//               {["BLOG DETAILS"].map((cat, i) => (
//                 <li key={i}>
//                   <a
//                     href="/blog/1"
//                     className="hover:text-stone-600 transition-colors"
//                   >
//                     {cat}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social */}
//           <div className="sm:px-6 text-left">
//             <h3 className="text-lg md:text-xl font-medium mb-6">Social</h3>
//             <ul className="space-y-4 text-sm md:text-base tracking-wide">
//               {socialLinks.map((item, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <item.icon className="w-5 h-5 text-stone-400 hover:text-stone-600 transition-colors" />
//                   <a
//                     href="#"
//                     className="hover:text-stone-600 transition-colors"
//                     aria-label={item.label}
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter Form */}
//           <div className="text-left mt-4 sm:mt-0">
//             <h3 className="text-lg md:text-xl font-medium mb-6">Conatct Us</h3>
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-5 text-sm md:text-base"
//             >
//               <div>
//                 <label className="block mb-2 text-stone-600">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your Name"
//                   className="w-full px-3 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-black"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-2 text-stone-600">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="you@example.com"
//                   className="w-full px-3 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-black"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-2 text-stone-600">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={3}
//                   required
//                   placeholder="Type your message..."
//                   className="w-full px-3 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-black resize-none"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 px-4 py-2 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ use Link for routing

const Footer = () => {
  const [atBottom, setAtBottom] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
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
          }`}
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
              <li>
                <Link
                  to="/"
                  className="hover:text-stone-600 transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-stone-600 transition-colors"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-stone-600 transition-colors"
                >
                  BLOG PAGE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-stone-600 transition-colors"
                >
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="sm:border-r sm:border-stone-300 sm:px-6 text-left">
            <h3 className="text-lg md:text-xl font-medium mb-6">Categories</h3>
            <ul className="space-y-3 text-sm md:text-base tracking-wide">
              <li>
                <Link
                  to="/blog/1"
                  className="hover:text-stone-600 transition-colors"
                >
                  BLOG DETAILS
                </Link>
              </li>
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
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us / Newsletter Form */}
          <div className="text-left mt-4 sm:mt-0">
            <h3 className="text-lg md:text-xl font-medium mb-6">Contact Us</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-sm md:text-base"
            >
              <div>
                <label className="block mb-2 text-stone-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block mb-2 text-stone-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block mb-2 text-stone-600">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                  placeholder="Type your message..."
                  className="w-full px-3 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-black resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
