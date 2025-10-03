import React from "react";
import { NavLink, useNavigate } from "react-router";
import { X } from "lucide-react"; // Added LogOut icon
import Icons from "../../assets/image";
import { SiGoogleanalytics } from "react-icons/si";
import { FaUserCog } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const links = [
    { name: "Overview", path: "/overview", ico: SiGoogleanalytics },
    { name: "User Management", path: "/usermanage", ico: CiUser },
    { name: "Booking Management", path: "/booking", ico: IoBookOutline },
    { name: "Post Management", path: "/post", ico: MdPostAdd },
    { name: "Setting & Profile", path: "/profile", ico: FaUserCog },
  ];

  const handleLogout = () => {
    // Example: clear token and redirect
    navigate("/signin");
  };

  return (
    <div className="font-Roboto border-r border-[#B0B3B8]">
      {/* Sidebar: Desktop */}
      <aside className="hidden md:flex flex-col w-[294px] h-full bg-white border-r border-gray-200 fixed top-0 left-0 z-40 ">
        {/* Logo Section */}
        <button
          className="cursor-pointer"
          onClick={() => navigate("/overview")}
        >
          <div className="mt-4 ml-3 gap-5 px-4 py-4">
            <img src={Icons.navLogo} alt="Logo" className="w-[150px] object-cover" />
          </div>
        </button>

        {/* Navigation */}
        <nav className="flex flex-col flex-grow p-4 space-y-2 text-base md:text-lg mt-7">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 mb-3 rounded-[16px] text-base h-12 flex items-center  ${
                  isActive
                    ? "bg-Primary text-white font-medium"
                    : "hover:text-textClr"
                }`
              }
              end
            >
              <div className="flex items-center gap-x-4">
                <p>
                  {" "}
                  <link.ico size={24} />
                </p>
                <p>{link.name}</p>
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Sidebar: Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/10 md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className="w-[294px] bg-white h-full shadow-md fixed top-0 left-0 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="mt-4 flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <img src={Icons.navLogo} alt="Logo" className="ml-3 w-[150px] object-cover" />
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900 w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full"
            >
              <X size={22} />
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2 flex-grow mt-7">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-2xl text-base ${
                    isActive
                      ? "bg-Primary text-white font-medium"
                      : "hover:text-textClr"
                  }`
                }
                end
              >
                <div className="flex items-center gap-x-3">
                  <link.ico size={24} />
                  {link.name}
                </div>
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
