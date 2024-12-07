
// // Sidebar.js
// import React, { useState } from "react";
// import { FaTachometerAlt, FaUser, FaCreditCard, FaVideo, FaBook, FaEdit, FaBullhorn } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { icon: <FaTachometerAlt />, label: "Dashboard" },
//     { icon: <FaUser />, label: "Profile" },
//     { icon: <FaCreditCard />, label: "Payment" },
//     { icon: <FaVideo />, label: "Online Lectures" },
//     { icon: <FaBook />, label: "Text Books" },
//     { icon: <FaEdit />, label: "Exam" },
//     { icon: <FaBullhorn />, label: "Announcements" },
//   ];

//   return (
//     <div>
//       {/* Hamburger Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-4 text-blue-900 lg:hidden focus:outline-none"
//       >
//         <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 bg-blue-900 text-white min-h-screen transition-transform transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 lg:static lg:w-64`}
//       >
//         <div className="p-4 text-xl font-bold">
//           Dashboard
//         </div>
//         <ul className="space-y-4 p-4">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded-md"
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;















// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaUser,
//   FaCreditCard,
//   FaVideo,
//   FaBook,
//   FaEdit,
//   FaBullhorn,
//   FaChevronRight,
//   FaChevronLeft,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { icon: <FaTachometerAlt />, label: "Dashboard" },
//     { icon: <FaUser />, label: "Profile" },
//     { icon: <FaCreditCard />, label: "Payment" },
//     { icon: <FaVideo />, label: "Online Lectures" },
//     { icon: <FaBook />, label: "Text Books" },
//     { icon: <FaEdit />, label: "Exam" },
//     { icon: <FaBullhorn />, label: "Announcements" },
//   ];

//   return (
//     <div className="">
//       {/* Sidebar */}
//       <div
//         className={` top-14 left-0 bg-blue-900 text-white min-h-screen transition-all duration-300 ${
//           isOpen ? "w-64" : "w-16"
//         } flex flex-col`}
//       >
//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`absolute -right-4 top-4 bg-blue-900 text-white rounded-full p-2 shadow-md focus:outline-none`}
//         >
//           {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
//         </button>

//         {/* Sidebar Header */}
//         <div className="p-4 text-xl font-bold">
//           {isOpen && <span>Dashboard</span>}
//         </div>

//         {/* Sidebar Menu */}
//         <ul className="space-y-4 p-4">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center space-x-4 cursor-pointer hover:bg-blue-700 p-2 rounded-md"
//             >
//               <div className="text-xl">{item.icon}</div>
//               {isOpen && <span>{item.label}</span>}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Content Area */}
//       <div
//         className={`ml-${isOpen ? "64" : "16"} transition-all duration-300 p-4`}
//       >
//         {/* <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
//         <p>Your content goes here...</p> */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCreditCard,
  FaVideo,
  FaBook,
  FaEdit,
  FaBullhorn,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard" },
    { icon: <FaUser />, label: "Profile" },
    { icon: <FaCreditCard />, label: "Payment" },
    { icon: <FaVideo />, label: "Online Lectures" },
    { icon: <FaBook />, label: "Text Books" },
    { icon: <FaEdit />, label: "Exam" },
    { icon: <FaBullhorn />, label: "Announcements" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`top-14 left-0 bg-blue-900 text-white min-h-screen transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center focus:outline-none ml-4 mt-4"
        >
          {isOpen ? "→" : "←"}
        </button>

        {/* Sidebar Content */}
        <div className="p-4 text-xl font-bold">{isOpen && "Dashboard"}</div>
        <ul className="space-y-4 p-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded-md"
            >
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      {/* <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-4">
         
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
