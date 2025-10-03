import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Icons from "../../assets/image";



const data = [
  { month: "January", users: 400, revenue: 240 },
  { month: "February", users: 300, revenue: 456 },
  { month: "March", users: -200, revenue: 139 },
  { month: "April", users: 278, revenue: 390 },
  { month: "May", users: 1250, revenue: 420 },
  { month: "June", users: 420, revenue: 520 },
  { month: "July", users: -100, revenue: 460 },
  { month: "August", users: 350, revenue: 500 },
  { month: "September", users: 450, revenue: 580 },
  { month: "October", users: 300, revenue: 480 },
  { month: "November", users: 200, revenue: 390 },
  { month: "December", users: 380, revenue: 450 },
];

const videosData = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/id/1011/150/150",
    title: "Dinner Event",
    username: "@zarif143",
    views: 720,
    votes: 660,
    like: 20,
    dislike:6,
    report: 4
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/id/1025/150/150",
    title: "Music Concert",
    username: "@musiclover",
    views: 1200,
    votes: 980,
    like: 10,
    dislike:6,
    report: 5
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/id/1027/150/150",
    title: "Nature Walk",
    username: "@naturefan",
    views: 450,
    votes: 320,
    like: 15,
    dislike:6,
    report: 7
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/id/1035/150/150",
    title: "City Tour",
    username: "@cityexplorer",
    views: 800,
    votes: 720,
    like:6,
    dislike: 3,
    report: 7
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/id/1043/150/150",
    title: "Cooking Show",
    username: "@chefmaster",
    views: 1500,
    votes: 1400,
    like: 15,
    dislike:6,
    report: 7
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/id/1049/150/150",
    title: "Art Gallery",
    username: "@artlover",
    views: 360,
    votes: 290,
    like: 15,
    dislike:6,
    report: 7
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/id/1056/150/150",
    title: "Tech Talk",
    username: "@techguru",
    views: 900,
    votes: 850,
    like: 15,
    dislike:6,
    report: 7
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/id/1060/150/150",
    title: "Workout Routine",
    username: "@fitnessfreak",
    views: 1100,
    votes: 1000,
    like: 15,
    dislike:6,
    report: 7
  },
  {
    id: 9,
    thumbnail: "https://picsum.photos/id/1067/150/150",
    title: "Travel Vlog",
    username: "@traveler",
    views: 780,
    votes: 700,
    like: 15,
    dislike:6,
    report: 7
  }
];

const activeUsers = [
  {
    name: "Daniel Jay Park",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    isActive: false,
  },
  {
    name: "Mark Rojas",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    isActive: true,
  },
  {
    name: "Mark Rojas",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    isActive: true,
  },
  {
    name: "Oscar",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    isActive: true,
  },
  {
    name: "Daniel",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    isActive: false,
  },
  {
    name: "Daniel Jay Park",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    isActive: false,
  },
  {
    name: "Mark Rojas",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    isActive: true,
  },
  {
    name: "Mark Rojas",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    isActive: true,
  }
  

  
];

const Dashboard = () => {
  const [videos, setVideos] = useState(videosData)

  //delete video function 
  const handleDeleteVideo = (videoId)=>{
    setVideos(videos.filter((v)=> v.id !== videoId))
  }


  return (
    <div className=" font-Poppins flex flex-col lg:flex-row bg-white min-h-[calc(100vh-90px)] overflow-hidden">
      {/* left content  */}
      {/* rechart and video uploaded section  */}
      <div className="flex-1 p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-textClr leading-5.5">
            Dashboard
          </h1>
        </div>
        <div>
          {/* rechart section  */}
        <div className="w-full h-[300px] md:h-[400px]">
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 60 }} // give bottom margin for legend
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign="top"
                height={46}
                iconSize={22}
                iconType="rect"
                wrapperStyle={{ paddingLeft: 10 }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#FBE38EB2"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#9A89FFB2"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
        
        {/* video uploaded section  */}
        <div>
        {/* title  */}
          <h1 className="text-2xl md:text-[1.75rem] font-bold text-textClr mb-6">
            Upload Videos
          </h1>
        </div>

        <div className="space-y-2 h-[200px] md:h-[260px] overflow-y-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="border border-[#B0B3B8] p-2 flex items-center justify-between rounded-[12px] pr-2"
            >
              <div className="flex gap-x-2 items-center">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="rounded-[10px] h-[63px] w-[77px]"
                />
                <div>
                  <h1 className="font-bold text-xl text-textClr tracking-[.5px]">
                    {video.title}
                  </h1>
                  <p>{video.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <div className="hidden lg:flex items-center gap-x-3">
                  <h1 className="text-sm text-[#B0B3B8]">
                    {video.like} like
                  </h1>
                  <h1 className="text-sm text-[#B0B3B8]">{video.dislike} dislikes</h1>
                  <h1 className="text-sm text-[#B0B3B8]">
                    {video.views} views
                  </h1>
                  
                  <h1 className="font-medium text-[#B0B3B8]">
                    {video.votes} votes
                  </h1>
                </div>
                {/* delete and flag icon  */}
                <div className="flex items-center gap-x-5">
                  <div>
                    <img src={Icons.delete} alt="delete icon" className="object-contain cursor-pointer" onClick={()=>handleDeleteVideo(video.id)} />
                  </div>
                  <div className="flex items-center gap-x-2 text-red-500 ">
                    <span>{video.report}</span>
                    <img src={Icons.flat} alt="flag icon" className="object-cover" />

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right content  */}
      {/* active users  */}
      <div className="lg:border-l border-[#E0E0E0] w-full md:min-w-[288px] md:w-max  p-6">
        <h1 className="text-2xl font-semibold mb-8">Active Users</h1>
        <ul className="overflow-y-auto max-h-[700px]">
          {activeUsers.map((user, index) => (
            <li key={index} className="flex items-center gap-x-4 mb-8 ">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-base font-medium">{user.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
