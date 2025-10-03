import React from "react";
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
import { activeUsers } from "./data";



const labelBox = [
  { id: 1, title: "Total users", decimal: 120, color: "#FFCCA7" },
  { id: 2, title: "Total Posts", decimal: 120, color: "#A7FFDC" },
  { id: 3, title: "Total Bookings", decimal: 120, color: "#A7BBFF" },
];

const data = [
  { month: "January", activeUsers: 400, booking: 240 },
  { month: "February", activeUsers: 300, booking: 456 },
  { month: "March", activeUsers: -200, booking: 139 },
  { month: "April", activeUsers: 278, booking: 390 },
  { month: "May", activeUsers: 1250, booking: 420 },
  { month: "June", activeUsers: 420, booking: 520 },
  { month: "July", activeUsers: -100, booking: 460 },
  { month: "August", activeUsers: 350, booking: 500 },
  { month: "September", activeUsers: 450, booking: 580 },
  { month: "October", activeUsers: 300, booking: 480 },
  { month: "November", activeUsers: 200, booking: 390 },
  { month: "December", activeUsers: 380, booking: 450 },
];

const Overview = () => {
  return (
    <div className="font-Roboto px-6 flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-90px)]">
      {/* left side  */}
      <div className="flex-1 px-6">
        <h1 className="title pt-6">Dashboard Overview</h1>
        {/* label box  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 mt-6 justify-between">
          {labelBox.map((item) => (
            <div
              key={item.id}
              className={`px-6 py-3 text-white md:h-[125px] rounded-xl shadow-[0px_0px_2px_rgba(0,0,0,.25)] flex flex-col justify-center `}
              style={{ backgroundColor: item.color }}
            >
              <h1 className="text-base md:text-xl lg:text-2xl ">
                {item.title}
              </h1>
              <p className="mt-2 text-xl md:text-2xl lg:text-[36px] font-bold">
                {item.decimal}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-6">
          <h1 className="title">User growth and Bookings</h1>
        </div>
        {/* rechart section  */}
        <div className="w-full h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 30 }} // give bottom margin for legend
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
                dataKey="activeUsers"
                stroke="#FBE38EB2" // Active users (yellowish)
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="booking"
                stroke="#9A89FFB2" // Bookings (bluish)
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* right side  */}
      <div className="font-Inter w-full md:w-max md:min-w-[288px] lg:border-l border-gray-300 p-4">
        <div className="flex items-center justify-between mt-13.5 mb-9">
          <h1 className="font-Inter text-textClr leading-[100%]">
            Active users{" "}
          </h1>
          <span className="font-Roboto text-textClr font-semibold">150</span>
        </div>
        <ul className="overflow-y-auto max-h-[700px]">
          {activeUsers.map((user, index) => (
            <li key={index} className="flex items-center gap-x-4 mb-8 ">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                {user.isActive && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
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

export default Overview;
