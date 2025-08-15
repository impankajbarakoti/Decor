import React from "react";
import LatestPosts from "./LatestPosts";

import SideBar from "./SideBar";

const LatestAndSidebar = () => {
  return (
    <div className="bg-stone-100 px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Latest Posts */}
        <div className="w-full lg:w-2/3">
          <LatestPosts />
        </div>

        {/* Right: Sidebar */}
        <div className="w-full lg:w-1/3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default LatestAndSidebar;
