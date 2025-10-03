import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { Outlet } from "react-router";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const headerHeight = 90; // Match h-[90px] in Header.jsx
  const sidebarWidth = 256; // 64 * 4px = 256px

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Right section */}
      <div className="flex-1 flex flex-col">
        {/* Fixed Header */}
        <div
          className="fixed h-[90px] top-0 left-0 md:left-64 right-0 z-40"
          // style={{ height: `${headerHeight}px` }}
        >
          <Header setSidebarOpen={setIsSidebarOpen} />
        </div>

        {/* Main Content */}
        <main
          className="flex-1 overflow-auto"
          style={{
            paddingTop: `${headerHeight}px`,
            paddingLeft: `0`,
          }}
        >
          {/* On desktop, add left padding for sidebar */}
          <div className="md:pl-[294px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
