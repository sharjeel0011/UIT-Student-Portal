
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-blue-900 ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-white">Logo</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <Link to="/">Home</Link> {/* Link to Home route */}
            </li>
            <li className="text-white">
              <Link to="/Studentportal">Student Portal</Link> {/* Link to StudentPortal route */}
            </li>
            <li className="text-white">
              <Link to="/coursfee">Fee Quarter Portal</Link> {/* Link to StudentPortal route */}
            </li>
            <li className="text-white">
              <Link to="/Signup">Sign Up</Link> {/* Link to Signup route */}
            </li>
            <li className="text-white">
              <Link to="/login">Login</Link> {/* Link to Login route */}
            </li>
            <li>
              <details>
                <summary className="text-white">Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><Link to="/link1">Link 1</Link></li> {/* Example Link */}
                  <li><Link to="/link2">Link 2</Link></li> {/* Example Link */}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
