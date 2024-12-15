import React from 'react'
import { Link } from 'react-router-dom'

const StudentNav = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar sticky top-0 bg-blue-900 z-50">
        {/* Left side logo or brand */}
        <div className="flex-1">
          <a className="btn text-white btn-ghost text-xl">uit</a>
        </div>

        {/* Centered "Student Portal" */}
        <div className="flex-none absolute left-1/2 transform -translate-x-1/2">
          <span className="text-white text-lg font-bold">Student Portal</span>
        </div>

        {/* Right side items */}
        <div className="flex-none">
          {/* Notification Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                {/* Add notification badge here if needed */}
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentNav
