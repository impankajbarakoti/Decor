import React from "react";
import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DesignProjects from "./components/DesignProjects";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import LatestAndSidebar from "./components/LatestAndSidebar";
import Contactus from "./components/pages/Contactus";
import Blogs from "./components/Blogs";

// import Blogdetails from "./components/pages/Blogdetails";
import BlogDls from "./components/pages/BlogDls";




const App = () => {
  return (
    // <Router>
    <div>
      {/* <Header /> */}
      {/* <Hero/> */}
      {/* <LatestAndSidebar /> */}
      {/* <DesignProjects/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              <Hero />
              <LatestAndSidebar />
              <DesignProjects />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/blog" element={<Blogs />} />
        {/* <Route path="/blog/:id" element={<Blogdetails />} /> */}
        <Route path="/blog/:id" element={<BlogDls/>}/>

    
      </Routes>

      <Footer />
    </div>
    // </Router>
  );
};

export default App;
