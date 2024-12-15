// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

// const Navbar = () => {
//   return (
//     <>
//       <div className="navbar  bg-blue-900 ">
//         <div className="flex-1">
//           <Link to="/" className="btn btn-ghost text-lg text-white">Logo</Link>
//         </div>
//         <div className="flex-none">
//           <ul className="menu menu-horizontal px-1">
//             {/* <li>
//               <details>
//                 <summary className="text-white">Availabel Programs</summary>
//                 <ul className="bg-white rounded-t-none p-2">
//                   <li><Link to="/link1">Website development</Link></li> 
//                   <li><Link to="/link2">Graphich Designing</Link></li> 
//                 </ul>
//               </details>
//             </li> */}

//             <li className="text-white    ">
//               <Link to="/Signup"> Signup</Link>
//             </li> 
//             <li className="text-blue-600 bg-white px-2 rounded-2xl ">
//               <Link to="/availabelprograms">Apply </Link>
//             </li> 
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-lg text-white font-bold">
            Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-none">
          <ul className="menu menu-horizontal space-x-4">
            {/* Uncomment if you want dropdowns */}
            {/* <li className="relative group text-white">
              <details>
                <summary>Available Programs</summary>
                <ul className="absolute left-0 hidden group-hover:block bg-white rounded-t-none p-2">
                  <li>
                    <Link to="/link1" className="block px-4 py-2 hover:bg-gray-200">
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/link2" className="block px-4 py-2 hover:bg-gray-200">
                      Graphic Designing
                    </Link>
                  </li>
                </ul>
              </details>
            </li> */}

            <li className="text-white">
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/availabelprograms"
                className="text-blue-600 bg-white px-4 py-1 rounded-full hover:bg-gray-200"
              >
                Apply
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
