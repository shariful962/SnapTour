import React from "react";

const Users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    feedbackMessage: "This app is very helpful for us who want to show their videos to others and it’s user-friendly.",
    submitted_at: "Aug 26, 10:04 PM"
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    feedbackMessage:
      "I love the interface and the way everything is organized. Great job!",
    submitted_at: "Aug 26, 10:04 PM"
  },
  {
    id: 3,
    name: "Michael Brown",
    username: "michaelbrown",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    feedbackMessage:
      "Uploading and sharing videos is so easy now. Really impressed.",
    submitted_at: "Aug 26, 10:04 PM",
  },
  {
    id: 4,
    name: "Emily Johnson",
    username: "emilyjohnson",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    feedbackMessage:
      "Fantastic app! Makes connecting with other creators so simple.",
    submitted_at: "Aug 26, 10:04 PM"
  },
  {
    id: 5,
    name: "David Wilson",
    username: "davidwilson",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    feedbackMessage:
      "The feedback system is really helpful. I can see what others think about my videos.",
    submitted_at: "Aug 26, 10:04 PM"
  },
  {
    id: 6,
    name: "Sophia Martinez",
    username: "sophiamartinez",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    feedbackMessage:
      "A user-friendly platform that encourages creativity. Highly recommend!",
    submitted_at: "Aug 26, 10:04 PM"
  },
  {
    id: 7,
    name: "James Anderson",
    username: "jamesanderson",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    feedbackMessage:
      "I enjoy using this app every day. It’s intuitive and smooth.",
    submitted_at: "Aug 26, 10:04 PM"
  },
  {
    id: 8,
    name: "Olivia Thomas",
    username: "oliviathomas",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    feedbackMessage:
      "Perfect for sharing short clips and getting feedback quickly.",
    submitted_at: "Aug 26, 10:04 PM"
  },
];

const UserFeedback = () => {
  return (
    <div className="font-Roboto px-4 md:p-6 min-h-[calc(100vh-90px)] flex flex-col">
      {/* Fixed Header */}
      <div className="sticky top-0 bg-white z-10 pb-2">
        <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr">
          User Feedback
        </h1>
      </div>

      {/* Scrollable User List */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {Users.length > 0 ? (
          Users.map((user) => (
            <div
              key={user.id}
              className="border border-[#E0E0E0] p-3 flex gap-x-8 rounded-[12px] relative"
            >
              <div className="flex items-start justify-start shrink-0">
                <img
                  src={user.profileImage}
                  alt="user"
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <h1 className="font-bold text-textClr text-base md:text-xl">
                    {user.name}
                  </h1>
                  <p className="font-medium text-[#B0B3B8] text-xs md:text-sm">
                    @{user.username}
                  </p>
                </div>
                <div>
                 <p>&quot;{user.feedbackMessage}&quot;</p>

                </div>
              </div>
              <div className="absolute top-2 right-3">
                <p className="text-xs">
                 {user.submitted_at}
                </p>
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

export default UserFeedback;
