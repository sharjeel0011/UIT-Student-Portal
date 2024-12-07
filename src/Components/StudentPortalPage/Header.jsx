// // Header.js
// import React from "react";

// const Header = ({ userImage }) => {
//   return (
//     <div className="flex justify-between items-center mb-8">
//       <h1 className="text-2xl font-bold">My Courses</h1>
//       <img
//         src={userImage}
//         alt="User profile"
//         className="rounded-full"
//         width="40"
//         height="40"
//       />
//     </div>
//   );
// };

// export default Header;




// Header.js
import React from "react";

const Header = ({ userImage }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <h1 className="text-2xl font-bold mb-4 sm:mb-0">My Courses</h1>
      <img
        src={userImage}
        alt="User profile"
        className="rounded-full"
        width="40"
        height="40"
      />
    </div>
  );
};

export default Header;
