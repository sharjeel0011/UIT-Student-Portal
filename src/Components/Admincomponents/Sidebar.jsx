import React from 'react';
import { FaHome, FaVideo, FaBook, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div>
    <div className="bg-blue-900 text-white w-64 h-full flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-blue-800">
        <img src="https://placehold.co/50x50" alt="Logo" className="h-12" />
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          <Link to='/adminPortal'>
          <li className="mb-4">
            <a href="#" className="flex items-center text-white">
              <FaHome className="mr-3" />
              <span>Overview</span>
            </a>
          </li>
          </Link>
          <Link to='/Videoadmin'>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-400">
              <FaVideo className="mr-3" />
              <span>Video</span>
            </a>
          </li>
          </Link>
          <Link to='/textadmin'>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-400">
              <FaBook className="mr-3" />
              <span>Book</span>
            </a>
          </li>
          </Link>
        </ul>
      </nav>
      <div className="px-4 py-6 border-t border-blue-800">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-400">
              <FaCog className="mr-3" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400">
              <FaSignOutAlt className="mr-3" />
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
