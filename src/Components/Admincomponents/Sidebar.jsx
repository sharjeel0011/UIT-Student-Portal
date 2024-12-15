// import React from 'react';
// import { FaHome, FaVideo, FaBook, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// const Sidebar = () => {
//   return (
//     <div>
//     <div className="bg-blue-900 text-white w-64 h-full flex flex-col">
//       <div className="flex items-center justify-center h-20 border-b border-blue-800">
//         <img src="https://placehold.co/50x50" alt="Logo" className="h-12" />
//       </div>
//       <nav className="flex-1 px-4 py-6">
//         <ul>
//           <Link to='/adminPortal'>
//           <li className="mb-4">
//             <a href="#" className="flex items-center text-white">
//               <FaHome className="mr-3" />
//               <span>Overview</span>
//             </a>
//           </li>
//           </Link>
//           <Link to='/Videoadmin'>
//           <li className="mb-4">
//             <a href="#" className="flex items-center text-gray-400">
//               <FaVideo className="mr-3" />
//               <span>Add Video</span>
//             </a>
//           </li>
//           </Link>
//           <Link to='/textadmin'>
//           <li className="mb-4">
//             <a href="#" className="flex items-center text-gray-400">
//               <FaBook className="mr-3" />
//               <span>Add Book</span>
//             </a>
//           </li>
//           </Link>
//           <Link to='/addcourse'>
//           <li className="mb-4">
//             <a href="#" className="flex items-center text-gray-400">
//               <FaBook className="mr-3" />
//               <span>Add course</span>
//             </a>
//           </li>
//           </Link>
//           <Link to='/addnotifaction'>
//           <li className="mb-4">
//             <a href="#" className="flex items-center text-gray-400">
//               <FaBook className="mr-3" />
//               <span>Add Notifaction</span>
//             </a>
//           </li>
//           </Link>
//         </ul>
//       </nav>
//       <div className="px-4 py-6 border-t border-blue-800">
//         <ul>
//           <li className="mb-4">
//             <a href="#" className="flex items-center text-gray-400">
//               <FaCog className="mr-3" />
//               <span>Settings</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" className="flex items-center text-gray-400">
//               <FaSignOutAlt className="mr-3" />
//               <span>Log out</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Sidebar;














import React, { useState } from 'react';
import { FaHome, FaVideo, FaBook, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-blue-900 text-white min-h-screen transition-all duration-300 z-50 ${
          isOpen ? 'w-60' : 'w-16'
        } flex flex-col`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center h-20 border-b border-blue-800">
          <img src="https://placehold.co/50x50" alt="Logo" className="h-12" />
          {isOpen && <span className="ml-3 text-lg font-bold">Logo</span>}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center focus:outline-none mt-4 ml-4"
        >
          {isOpen ? '←' : '→'}
        </button>

        {/* Sidebar Content */}
        <nav className="flex-1 px-4 py-6">
          <ul>
            <Link to="/adminPortal019">
              <li className="mb-4">
                <a href="#" className="flex items-center text-white">
                  <FaHome className="mr-3" />
                  {isOpen && <span>Overview</span>}
                </a>
              </li>
            </Link>
            <Link to="/Videoadmin">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaVideo className="mr-3" />
                  {isOpen && <span>Add Video on Batches</span>}
                </a>
              </li>
            </Link>
            <Link to="/publicytvideos">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaVideo className="mr-3" />
                  {isOpen && <span>Add Youtube Video</span>}
                </a>
              </li>
            </Link>
            <Link to="/textadmin">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Add Books on Batches</span>}
                </a>
              </li>
            </Link>
            <Link to="/addcourse">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Add New Course</span>}
                </a>
              </li>
            </Link>
            <Link to="/addnotifaction">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Add Notification on Batches</span>}
                </a>
              </li>
            </Link>
            <Link to="/Coursesdetails">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Courses Details</span>}
                </a>
              </li>
               </Link>

               <Link to="/StudentDetails">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Student Details </span>}
                </a>
              </li>
               </Link>

              <Link to="/coursesaction">
              
              
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Courses Manage</span>}
                </a>
              </li>
            </Link>
           
            <Link to="/signupadmin">
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-400">
                  <FaBook className="mr-3" />
                  {isOpen && <span>Create Admin</span>}
                </a>
              </li>
            </Link>
          </ul>
        </nav>

        <div className="px-4 py-6 border-t border-blue-800">
          <ul>
           
            <li>
              <a href="#" className="flex items-center text-gray-400">
                <FaSignOutAlt className="mr-3" />
                {isOpen && <span>Log Out</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
