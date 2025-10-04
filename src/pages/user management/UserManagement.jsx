// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
// import { Users } from "./data";





// const UserManagement = () => {
//   const [search, setSearch] = useState("");


//   //filtered users
//   const filteredUsers = Users.filter((user) => {
//     const searchTeam = search.toLowerCase();
//     return (
//       user.name.toLowerCase().includes(searchTeam) ||
//       user.email.toLowerCase().includes(searchTeam)
//     );
//   });



 
//   return (
//     <div className="font-Roboto px-4 md:p-6 min-h-[calc(100vh-90px)] overflow-hidden">
//       <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr mb-5.5">
//         User Mangement
//       </h1>
     
//       <div className="mt-5">
//         {/* Search Box */}
//         <div className="relative mb-4">
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search user..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="w-full pl-10 pr-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none "
//           />
//         </div>
//       </div>

//       {/* user list section  */}

//       <div className="space-y-4 max-h-[450px] overflow-y-auto">
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <div
//               key={user.id}
//               className="border border-[#E0E0E0] p-3 flex items-center justify-between gap-3 rounded-[12px]"
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                 src={user.profileImage}
//                 alt="user"
//                 className="h-12 w-12 rounded-full"
//               />
//               <div>
//                 <h1 className="font-bold text-textClr text-base md:text-xl">
//                   {user.name}
//                 </h1>
//                 <p className="font-medium text-[#B0B3B8] text-xs md:text-sm">
//                   {user.email}
//                 </p>
//               </div>
//               </div>
//               <div className="flex flex-col md:flex-row gap-3">
//                 <button className="px-4 py-2  rounded-[10px] bg-[#00CF07] text-white cursor-pointer">Active </button>
//                 <button className="px-4 py-2 border rounded-[10px] bg-[#FF0000] text-white cursor-pointer">Suspend</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 italic">No users found</p>
//         )}
//       </div>

    
//     </div>
//   );
// };

// export default UserManagement;



import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Users as UsersData } from "./data";

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(UsersData);

  // Handle status change
  const handleStatusChange = (id, newType) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, type: newType } : user
      )
    );
  };

  // Filtered users
  const filteredUsers = users.filter((user) => {
    const searchTerm = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="font-Roboto px-4 md:p-6 min-h-[calc(100vh-90px)] overflow-hidden">
      <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr mb-5.5">
        User Management
      </h1>

      {/* Search Box */}
      <div className="mt-5">
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-4 border border-[#E0E0E0] rounded-lg focus:outline-none "
          />
        </div>
      </div>

      {/* User List */}
      <div className="space-y-4 max-h-[450px] overflow-y-auto">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="border border-[#E0E0E0] p-3 flex items-center justify-between gap-3 rounded-[12px]"
            >
              <div className="flex items-center gap-3">
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
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={() => handleStatusChange(user.id, "active")}
                  disabled={user.type === "active"}
                  className={`px-4 py-2 rounded-[10px] text-white  transition ${
                    user.type === "active"
                      ? "bg-[#00CF07]/40 cursor-not-allowed"
                      : "bg-[#00CF07] cursor-pointer"
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => handleStatusChange(user.id, "suspend")}
                  disabled={user.type === "suspend"}
                  className={`px-4 py-2 rounded-[10px] text-white  transition ${
                    user.type === "suspend"
                      ? "bg-[#FF0000]/40 cursor-not-allowed"
                      : "bg-[#FF0000] cursor-pointer"
                  }`}
                >
                  Suspend
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No users found</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;


