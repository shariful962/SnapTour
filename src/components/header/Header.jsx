import React, { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Icons from "../../assets/image";
import { IoChevronDown } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { CiEdit } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    theme: "Halloween ",
    name: "Helena",
    type: "upload",
    time: "1 min ago",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    theme: "Halloween",
    name: "Shafiq",
    type: "like",
    time: "3 min ago",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    theme: "Halloween ",
    name: "Nafija",
    type: "report",
    time: "1 hour ago",
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    theme: "Halloween",
    name: "Ekbal Hasan",
    type: "vote",
    time: "1 hour ago",
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    theme: "Halloween ",
    name: "Nafija",
    type: "dislike",
    time: "2 hour ago",
  },
];

const Header = ({ setSidebarOpen }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("Olivia Rhye");
  const [email, setEmail] = useState("olivia@untitledui.com");
  const [profileImage, setProfileImage] = useState(Icons.profilePic);
  const [profileToggle, setProfileToggle] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const profileRef = useRef(false);
  const notificationRef = useRef(false);

  // profile modal close when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileToggle(false);
        setEditModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //notification modal close when click outside of the modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // handle logout function
  const handleLogut = () => {
    // logic here
    navigate("/signin");
  };

  // handle image upload for modal
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="font-Roboto fixed top-0 left-0 md:left-[294px] py-2 right-0 h-[80px] md:h-[90px] bg-white px-4 flex items-center z-40 border-b border-gray-200">
      <div className="flex items-center justify-between w-full">
        {/* Hamburger icon on mobile only */}
        <div
          className="md:hidden mr-4 flex items-center justify-center bg-Primary text-bg w-10 h-10 rounded-full"
          onClick={() => setSidebarOpen(true)}
          aria-label="Toggle Sidebar"
        >
          <HiMenu size={22} className="text-white" />
        </div>

        {/* Right Side: Profile Info */}
        <div

          className="ml-auto flex items-center gap-2 relative"
        >
          <div
            ref={profileRef}
            className="flex items-center gap-4 ml-auto md:border md:border-[#B0B3B8] rounded-[10px] p-2 relative"

          >
            <div className="relative ">
              <img
                src={profileImage}
                alt="user profile"
                className="h-12 w-12 rounded-full object-cover"
              />
              
              
              {/* profile dropdown icon for mobile  */}
              <div className="flex items-center justify-center md:hidden  w-4.5 h-4.5 bg-gray-200 rounded-full absolute bottom-0 -right-1">
                <IoChevronDown
                  size={14}
                  onClick={() => {
                    setProfileToggle(!profileToggle);
                    setEditModal(false);
                  }}
                />
              </div>
            </div>
            {/* profile section  */}
            <div className="hidden md:block">
              <h1 className="text-[1.25rem] font-semibold text-textClr leading-[100%]">
                {name}
              </h1>
              <p className="text-[1rem] text-stroke">{email}</p>
            </div>
            {/* profile dropdown icon for desktop  */}
            <span className="hidden md:block cursor-pointer">
              <IoChevronDown
                size={22}
                onClick={() => {
                  setProfileToggle(!profileToggle);
                  setEditModal(false);
                }}
              />{" "}
            </span>
            {/* profile modal section  */}
            <AnimatePresence>
              {profileToggle && !editModal && (
                <motion.div
                  className="absolute flex items-center justify-center right-0 top-[100%] w-72 md:w-full h-36 bg-white rounded-xl shadow-lg border border-gray-200 p-3 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex flex-col gap-3 justify-center items-center">
                    {/* edit button  */}
                    <button
                      className="w-[150px] flex items-center gap-x-4 border border-gray-200 px-4 py-1.5 rounded-md cursor-pointer"
                      onClick={() => {
                        setEditModal(true);
                        setProfileToggle(false);
                      }}
                    >
                      <CiEdit size={22} /> Edit Profile
                    </button>
                    {/* logout button  */}
                    <button
                      className="w-[150px] flex items-center gap-x-4 border border-gray-200 px-4 py-1.5 rounded-md cursor-pointer"
                      onClick={handleLogut}
                    >
                      <LuLogOut size={22} /> Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* edit profile modal */}
            <AnimatePresence>
              {editModal && (
                <motion.div
                  className="absolute right-0 top-[100%] w-72 md:w-full bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-60"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex flex-col items-center gap-3">
                    {/* profile image  */}
                    <div className="relative">
                      <img
                        src={profileImage}
                        alt="Profile picture"
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                      />
                      <label
                        htmlFor="imageUpload"
                        className="absolute bottom-0 right-[calc(50%-40px)] bg-white p-2 rounded-full"
                      >
                        <FaCamera size={22} className="text-gray-600" />
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </div>
                    {/* name input section  */}
                    <div className="w-full">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 px-3 py-2 text-center w-full rounded-md outline-none"
                      />
                    </div>
                    {/* buttons  */}
                    <div className="mt-3 flex gap-3">
                      <button
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setEditModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg bg-Primary text-white  cursor-pointer"
                        onClick={() => {
                          // save logic here
                          setEditModal(false);
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* notification  */}
          <div className="relative" ref={notificationRef}>
            <span>
              <IoNotificationsOutline
                className="cursor-pointer relative"
                size={28}
                onClick={() => setNotificationOpen(!notificationOpen)}
              />
            </span>
            <AnimatePresence>
              {notificationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-3 z-60"
                >
                  <h1 className="text-lg font-bold text-textClr mb-2">
                    Notifications
                  </h1>
                  <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="text-center text-gray-400">
                        No notifications
                      </p>
                    ) : (
                      <>
                        {notifications.map((n) => (
                          <>
                            <div
                              key={n.id}
                              className="flex items-start gap-2 p-2"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  src={n.img}
                                  alt="user profile pic"
                                  className="w-9 h-9 rounded-full"
                                />
                              </div>
                              <div>
                                <p className="text-sm">
                                  <strong>{n.name}</strong> {n.type} a video in{" "}
                                  {n.theme}
                                </p>
                                <span className="text-xs text-gray-400">
                                  {n.time}
                                </span>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
