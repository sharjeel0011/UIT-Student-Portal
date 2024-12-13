import React from "react";
import { Link } from 'react-router-dom';
const StudentSignUpScreen = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="bg-blue-900 text-white text-center py-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Student Sign Up</h2>
        </div>
        <form className="space-y-6 mt-6">
          <div>
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              placeholder="Enter CNIC"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Already a member? Sign in
            </a>
          </div>
          <div>
              <Link to='/admissionform'>
            <button
             
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
           Sign Up
            </button>
            </Link> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignUpScreen;
