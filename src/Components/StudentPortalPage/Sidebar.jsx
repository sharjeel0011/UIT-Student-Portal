

import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    { icon: <FaTachometerAlt />, label: "Dashboard", route: "/home" },
    { icon: <FaUser />, label: "Profile", route: "/profile" },
    { icon: <FaCreditCard />, label: "Payment", route: "/payments" },
    { icon: <FaVideo />, label: "Online Lectures", route: "/onlinelectures" },
    { icon: <FaBook />, label: "Text Books", route: "/textbookdownload" },
    { icon: <FaEdit />, label: "Exam", route: "/exam" },
    { icon: <FaBullhorn />, label: "Announcements", route: "/announcement" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`top-14 left-0 bg-blue-900 text-white min-h-screen transition-all duration-300 ${
          isOpen ? "w-36" : "w-16"
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
            <li key={index}>
              <Link
                to={item.route}
                className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded-md"
              >
                {item.icon}
                {isOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;













// // is good for screen 2
// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaUser,
//   FaCreditCard,
//   FaVideo,
//   FaBook,
//   FaEdit,
//   FaBullhorn,
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
//     <div>
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 bg-blue-900 text-white min-h-screen transition-transform duration-300 z-50 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } w-64`}
//       >
//         {/* Toggle Button Inside Sidebar */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 bg-blue-700 text-white rounded-full p-2"
//         >
//           ✕
//         </button>

//         {/* Sidebar Content */}
//         <div className="p-4 text-xl font-bold">Dashboard</div>
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

//       {/* Toggle Button Outside Sidebar */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed top-4 left-4 bg-blue-700 text-white rounded-full p-2 z-50"
//         >
//           ☰
//         </button>
//       )}
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
//     <div>
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 bg-blue-900 text-white min-h-screen transition-transform duration-300 z-50 ${
//           isOpen ? "w-64" : "w-16"
//         } flex flex-col`}
//       >
//         {/* Toggle Button Inside Sidebar */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center focus:outline-none mt-4 mx-auto"
//         >
//           {isOpen ? "→" : "☰"}
//         </button>

//         {/* Sidebar Content */}
//         <div className="p-4 text-xl font-bold">{isOpen && "Dashboard"}</div>
//         <ul className="space-y-4 p-4">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded-md"
//             >
//               {item.icon}
//               {isOpen && <span>{item.label}</span>}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
