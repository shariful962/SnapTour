import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

const Users = [
  {
    id: 1,
    name: "John De",
    email: "johndexkyewasfkdsu7rjekrn@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Farabi Hasan",
    email: "farabihasan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sifat Hasan",
    email: "sifathasan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Shariful Islam",
    email: "sharifulislam@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Sohag",
    email: "sohag@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Furkan",
    email: "furkan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "John De",
    email: "johndexkyewasfkdsu7rjekrn@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 8,
    name: "Farabi Hasan",
    email: "farabihasan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 9,
    name: "Sifat Hasan",
    email: "sifathasan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 10,
    name: "Shariful Islam",
    email: "sharifulislam@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 11,
    name: "Sohag",
    email: "sohag@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 12,
    name: "Furkan",
    email: "furkan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
    {
    id: 13,
    name: "Sohag",
    email: "sohag@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 14,
    name: "Furkan",
    email: "furkan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
    {
    id: 15,
    name: "Sohag",
    email: "sohag@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 16,
    name: "Furkan",
    email: "furkan@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];



const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;

  //filtered users
  const filteredUsers = Users.filter((user) => {
    const searchTeam = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchTeam) ||
      user.email.toLowerCase().includes(searchTeam)
    );
  });

  // pagination
  const totalPages = Math.ceil(filteredUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + perUsersPage
  );

  // page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="font-Roboto px-4 md:p-6 min-h-[calc(100vh-90px)] overflow-hidden">
      <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr mb-5.5">
        User Mangement
      </h1>
      <div className="border border-[#E0E0E0] w-full md:max-w-[400px] p-4 rounded-[10px]">
        <h1 className="text-2xl font-bold text-[#B0B3B8]">Total Users</h1>
        <span className="font-bold text-[2rem] text-Primary">
          {Users.length}
        </span>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl md:text-[1.75rem] font-bold text-textClr">
          Users
        </h1>
        {/* Search Box */}
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none "
          />
        </div>
      </div>

      {/* user list section  */}

      <div className="space-y-4 max-h-[170px] md:max-h-[350px] overflow-y-auto">
        {currentUsers.length > 0 ? (
          currentUsers.map((user) => (
            <div
              key={user.id}
              className="border border-[#E0E0E0] p-3 flex items-center gap-3 rounded-[12px]"
            >
              <img
                src={user.profileImage}
                alt="user"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h1 className="font-bold text-textClr text-base md:text-xl">
                  {user.name}
                </h1>
                <p className="font-medium text-[#B0B3B8] text-xs md:text-sm">
                  {user.email}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No users found</p>
        )}
      </div>

      {/* pagination  */}
      {/* pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-end gap-1">
          {/* prev button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded flex gap-1 items-center ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FaChevronLeft /> Prev
          </button>

          {/* dynamic page numbers */}
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <div
                onClick={() => handlePageChange(1)}
                className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100"
              >
                1
              </div>
            )}

            {currentPage > 2 && <div>...</div>}

            <div className="px-3 py-1 border rounded bg-blue-500 text-white">
              {currentPage}
            </div>

            {currentPage < totalPages - 1 && <div>...</div>}

            {currentPage < totalPages && (
              <div
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100"
              >
                {totalPages}
              </div>
            )}
          </div>

          {/* next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded flex gap-1 items-center ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Next <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
