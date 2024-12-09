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
            <li>
              <details>
                <summary className="text-white">Availabel Programs</summary>
                <ul className="bg-white rounded-t-none p-2">
                  <li><Link to="/link1">Website development</Link></li> {/* Example Link */}
                  <li><Link to="/link2">Graphich Designing</Link></li> {/* Example Link */}
                </ul>
              </details>
            </li>

            <li className="text-blue-600 bg-white px-2 rounded-2xl ">
              <Link to="/Signup">Apply </Link>
            </li> 
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
