import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ThemeModal = ({ isOpen, onClose }) => {
  const [themeName, setThemeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [rules, setRules] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log({
      themeName,
      startDate,
      startTime,
      endDate,
      endTime,
      rules,
      coverImage,
    });
    onClose();
  };

  return (
    <AnimatePresence className="font-Roboto">
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-t-2xl md:rounded-2xl p-6 w-full h-full md:h-auto md:max-w-lg shadow-lg overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-[1.75rem] md:text-2xl font-bold text-textClr leading-5.5 mb-4">
              Upload Competition Themes
            </h2>

            {/* Upload Box */}
            <label className="w-full h-40 bg-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer overflow-hidden mb-4">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt="Theme Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <span className="text-4xl text-gray-500">+</span>
                  <p className="text-gray-600 text-sm">Upload a theme cover</p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>

            {/* Theme name */}
            <div>
              <label
                htmlFor="themeName"
                className="font-Roboto font-medium text-textClr"
              >
                Theme name
              </label>
              <input
                id="themeName"
                type="text"
                placeholder="Enter theme name"
                value={themeName}
                onChange={(e) => setThemeName(e.target.value)}
                className="w-full border p-2 rounded mb-4"
              />
            </div>

            {/* Dates & times */}
            <h1 className="font-Roboto font-medium text-textClr mb-4">
              Date of competition
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="startDate"
                  className="text-xs text-gray-500 mb-1"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border p-2 rounded"
                  placeholder="select starting date"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="startTime"
                  className="text-xs text-gray-500 mb-1"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endDate" className="text-xs text-gray-500 mb-1"> End Date</label>
                <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-2 rounded"
              />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endTime"className="text-xs text-gray-500 mb-1">End Time</label>
                <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border p-2 rounded"
              />
              </div>
            </div>

            {/* Rules */}
            <div className="flex flex-col">
              <label htmlFor="" className="font-Roboto font-medium text-textClr mb-1">Competition rules</label>
              <textarea
              placeholder="Write down the rules of competition"
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              className="w-full border p-2 rounded mb-4"
              rows={3}
            />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeModal;
