import React from "react";
import my from "../assets/img 21.webp";
import new1 from "../assets/new1.webp"
import new2 from "../assets/new2.jpeg"
import new3 from "../assets/new3.jpeg"
import new4 from "../assets/new4.jpeg"

const DesignProjects = () => {
  const projectLinks = [
    { title: "Modern & Organic Home Makeover", highlight: true },
    { title: "Sustainable Family Farmhouse" },
    { title: "Sophisticated Eclectic Studio" },
    { title: "Cheerful French Country Home" },
    { title: "Eclectic Traditional Apartment" },
  ];

  const bottomProjects = [
    {
      title: "Budget Ideas",
      subtitle: "Rooms, DIYs, hacks and all things thrift",
      image:
        new1,
    },
    {
      title: "Biggest Design Mistakes",
      subtitle: "Things you'll want to avoid",
      image:
        new2,
    },
    {
      title: "Design Trends",
      subtitle: "That we just can't stop talking about",
      image:
        new3,
    },
    {
      title: "Home Makeovers",
      subtitle: "Who doesn't like a good before & after?",
      image:
        new4,
    },
  ];

  return (
    <div className="bg-stone-50 min-h-screen py-20 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4 tracking-wide">
          MY DESIGN PROJECTS
        </h1>
        <p className="text-stone-400 text-sm md:text-base tracking-widest uppercase">
          A DEEP DIVE INTO MY WORK AND PROCESS
        </p>
      </div>

      {/* Main Image + Sidebar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
        {/* Main Image */}
        <div className="lg:col-span-3">
          <img
            src={my}
            alt="Modern living room design"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover shadow-lg rounded-md"
          />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-stone-800 border-b pb-2">
            Explore Projects
          </h2>
          <div className="space-y-6">
            {projectLinks.map((link, index) => (
              <div
                key={index}
                className="border-b border-stone-300 pb-2 text-base md:text-lg"
              >
                <a
                  href="#"
                  className={`block transition-colors duration-200 ${
                    link.highlight
                      ? "text-amber-800 font-medium"
                      : "text-stone-600 hover:text-amber-800"
                  }`}
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-stone-800 text-center -mt-6 mb-12 tracking-wide">
        SEE MY LATEST POST
      </h2>

      {/* Bottom Project Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] md:h-[450px] overflow-hidden rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
              />

              {/* Text Box */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm border border-amber-300 rounded-md p-4 text-center max-w-[90%] md:max-w-[80%] shadow">
                <h3 className="text-base md:text-xl text-stone-800 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
