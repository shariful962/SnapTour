import React, { useState } from "react";
import Icons from "../../assets/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeModal from "./ThemeModal";

const ManageCompetition = () => {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [votes, setVotes] = useState("");
  const [image, setImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const themes = [
    {
      id: 1,
      img: Icons.theme,
      title: "Halloween",
      startTime: "9:00 AM",
      endTime: "3:00 PM",
      startDate: "1.11.2025",
      endDate: "5.11.2025", // Added endDate
    },
    {
      id: 2,
      img: Icons.theme,
      title: "Fall-to-Winter Transition",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      startDate: "1.11.2025",
      endDate: "10.11.2025", // Added endDate
    },
    {
      id: 3,
      img: Icons.theme1,
      title: "Christmas",
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      startDate: "1.12.2025",
      endDate: "25.12.2025",
    },
    {
      id: 4,
      img: Icons.theme2,
      title: "New Year Celebration",
      startTime: "8:00 PM",
      endTime: "12:00 AM",
      startDate: "31.12.2025",
      endDate: "1.1.2026",
    },
    {
      id: 5,
      img: Icons.theme,
      title: "Easter Hunt",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      startDate: "4.4.2026",
      endDate: "10.4.2026",
    },
    {
      id: 6,
      img: Icons.theme,
      title: "Summer Festival",
      startTime: "10:00 AM",
      endTime: "8:00 PM",
      startDate: "1.6.2026",
      endDate: "15.6.2026",
    },
    {
      id: 7,
      img: Icons.theme1,
      title: "Autumn Leaves",
      startTime: "8:00 AM",
      endTime: "5:00 PM",
      startDate: "15.9.2026",
      endDate: "30.9.2026",
    },
    {
      id: 8,
      img: Icons.theme,
      title: "Spring Blossom",
      startTime: "7:00 AM",
      endTime: "4:00 PM",
      startDate: "1.4.2026",
      endDate: "15.4.2026",
    },
    {
      id: 9,
      img: Icons.theme2,
      title: "Winter Wonderland",
      startTime: "9:00 AM",
      endTime: "3:00 PM",
      startDate: "1.12.2025",
      endDate: "15.12.2025",
    },
    {
      id: 10,
      img: Icons.theme2,
      title: "Harvest Festival",
      startTime: "10:00 AM",
      endTime: "7:00 PM",
      startDate: "15.10.2025",
      endDate: "30.10.2025",
    },
    {
      id: 11,
      img: Icons.theme1,
      title: "Winter Solstice",
      startTime: "6:00 PM",
      endTime: "12:00 AM",
      startDate: "21.12.2025",
      endDate: "22.12.2025",
    },
    {
      id: 12,
      img: Icons.theme2,
      title: "Spring Festival",
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      startDate: "20.3.2026",
      endDate: "31.3.2026",
    },
  ];

  const displayedThemes = showAll ? themes : themes.slice(0, 2);

  //winner competition form submit logic here
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, theme, votes, image);

    // Reset input fields
    setName("");
    setTheme("");
    setVotes("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create image URL for preview
    }
  };

  return (
    <div className="font-Roboto p-4 md:pl-6 md:pr-16 bg-white min-h-[calc(100vh-90px)] overflow-hidden">
      {/* video theme section area */}
      <div>
        <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr">
          Competition Themes
        </h1>

        <div className="hidden lg:flex justify-end mb-2">
          {themes.length > 2 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="underline text-base font-medium text-textClr cursor-pointer"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <AnimatePresence>
            {displayedThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={theme.img}
                  alt="Theme"
                  className="w-full h-[170px] object-cover rounded-[20px]"
                />
                <div className="flex items-center justify-between mt-1 gap-3">
                  <div className="w-1/2">
                    <h1 className="text-xl md:text-2xl lg:text-[1.75rem]">
                      {theme.title}
                    </h1>
                  </div>
                  <div className="w-1/2 flex items-center justify-end gap-x-4">
                    <div>
                      <p>Start at {theme.startTime}</p>
                      <p>{theme.startDate}</p>
                    </div>
                    <div className="flex gap-x-1">
                      <div className="h-13 w-[1px] bg-gray-300"></div>
                      <div className="h-13 w-[1px] bg-gray-300"></div>
                    </div>
                    <div>
                      <p>End at {theme.endTime}</p>
                      <p>{theme.endDate}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className=" mt-8 lg:hidden flex justify-end">
          {themes.length > 2 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className=" text-base font-medium bg-Primary/30 text-textClr px-4 py-1 rounded-[5px]"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          )}
        </div>
        {/* create theme button  */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-Primary text-white h-14 w-max px-12 rounded-[10px] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            + Add New Theme
          </button>
        </div>
      </div>
      {/* Modal pop up  */}
      {isModalOpen && (
        <ThemeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* competition winner section area */}
      <div className="mt-12">
        <h2 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr mb-6">
          Competition Winner
        </h2>
        {/* form section */}
        <div className="max-w-[800px] h-auto pb-10">
          <form onSubmit={handleSubmit} className="w-full">
            {/* username input */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-x-6 mb-5">
              <label className="w-[150px] ">Name</label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-[#B0B3B8] rounded-[10px] h-11 px-4.5 placeholder:text-white"
              />
            </div>
            {/* theme input */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-x-6 mb-5">
              <label className="w-[150px]">Theme</label>

              <input
                type="text"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="Enter the theme name"
                className="w-full bg-[#B0B3B8] rounded-[10px] h-11 px-4.5 placeholder:text-white"
              />
            </div>
            {/* vote input */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-x-6 mb-5">
              <label className="w-[150px]">Votes</label>

              <input
                id="votes"
                type="text"
                value={votes}
                onChange={(e) => setVotes(e.target.value)}
                placeholder="Count the vote number"
                className="w-full bg-[#B0B3B8] rounded-[10px] h-11 px-4.5 placeholder:text-white"
              />
            </div>

            {/* Image Upload */}
            <div className="w-full flex items-center justify-center  mb-4 md:mb-5.5">
              <div className="relative w-full h-[250px] bg-gray-800 rounded-lg flex justify-center items-center">
                {image ? (
                  <img
                    src={image}
                    alt="uploaded"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-white text-center">
                    <div className="text-4xl">+</div>
                    <p>Upload the winner image</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-Primary text-white px-8 rounded-[10px] py-3 w-full max-w-[370px] cursor-pointer"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageCompetition;
