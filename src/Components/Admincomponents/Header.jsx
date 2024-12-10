import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none"
            placeholder="Search"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <div className="ml-6 flex items-center">
          <span className="mr-2">Agency Designer</span>
          <img src="https://placehold.co/40x40" alt="User Avatar" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
