// import React from "react";
// import { FaFacebook, FaTelegram, FaBullhorn, FaBook } from "react-icons/fa";
// import Sidebar from "../../Components/StudentPortalPage/Sidebar";

// const StudentPortalWelcome = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//         <Sidebar/>
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-teal-700">
//           Welcome to U IT Student Portal
//         </h1>
//         <a
//           className="text-2xl font-semibold text-gray-700 mt-4 block"
//           href="#"
//         >
//           Click here to generate payment voucher
//         </a>
//         <p className="text-lg text-gray-600 mt-2">
//           You will be able to view lectures anytime online once they are
//           available on the portal.
//         </p>

//         <div className="flex justify-center items-center mt-8 space-x-8">
//           {/* Facebook Group */}
//           <div className="text-center">
//             <FaFacebook className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Facebook Group</p>
//           </div>

//           {/* Telegram Group */}
//           <div className="text-center">
//             <FaTelegram className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Telegram Group</p>
//           </div>

//           {/* Announcements */}
//           <div className="text-center">
//             <FaBullhorn className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Announcements</p>
//           </div>

//           {/* Course Catalog */}
//           <div className="text-center">
//             <FaBook className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Course Catalog</p>
//           </div>
//         </div>

//         <a className="text-lg text-red-600 mt-8 block" href="#">
//           Click here to view Payments
//         </a>
//       </div>
//     </div>
//   );
// };

// export default StudentPortalWelcome;



// import React from "react";
// import { FaFacebook, FaTelegram, FaBullhorn, FaBook } from "react-icons/fa";

// const StudentPortalWelcome = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen overflow-hidden">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-teal-700">
//           Welcome to PIAIC Student Portal
//         </h1>
//         <a
//           className="text-2xl font-semibold text-gray-700 mt-4 block"
//           href="#"
//         >
//           Click here to generate payment voucher
//         </a>
//         <p className="text-lg text-gray-600 mt-2">
//           You will be able to view lectures anytime online once they are
//           available on the portal.
//         </p>

//         <div className="flex justify-center items-center mt-8 space-x-8">
//           {/* Facebook Group */}
//           <div className="text-center">
//             <FaFacebook className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Facebook Group</p>
//           </div>

//           {/* Telegram Group */}
//           <div className="text-center">
//             <FaTelegram className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Telegram Group</p>
//           </div>

//           {/* Announcements */}
//           <div className="text-center">
//             <FaBullhorn className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Announcements</p>
//           </div>

//           {/* Course Catalog */}
//           <div className="text-center">
//             <FaBook className="text-teal-700 mx-auto" size={50} />
//             <p className="text-lg text-gray-700 mt-2">Course Catalog</p>
//           </div>
//         </div>

//         <a className="text-lg text-red-600 mt-8 block" href="#">
//           Click here to view Payments
//         </a>
//       </div>
//     </div>
//   );
// };

// export default StudentPortalWelcome;





















// import React, { useState } from "react";
// import { FaFacebook, FaTelegram, FaBullhorn, FaBook, FaBars, FaTimes } from "react-icons/fa";
// import Sidebar from'../../Components/StudentPortalPage/Sidebar'
// const StudentPortalWelcome = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
     
// <Sidebar/>
//         <div className="flex flex-col items-center justify-center min-h-screen px-10">
//           <h1 className="text-2xl font-bold text-teal-700 text-center">
//             Welcome to PIAIC Student Portal
//           </h1>
//           <a
//             className="text-2xl font-semibold text-gray-700 mt-4 block text-center"
//             href="#"
//           >
//             Click here to generate payment voucher
//           </a>
//           <p className="text-lg text-gray-600 mt-2 text-center">
//             You will be able to view lectures anytime online once they are
//             available on the portal.
//           </p>

//           <div className="flex justify-center items-center mt-0 space-x-0 flex-wrap">
//             {/* Facebook Group */}
//             <div className="text-center">
//               <FaFacebook className="text-teal-700 mx-auto" size={50} />
//               <p className="text-lg text-gray-700 mt-2">Facebook Group</p>
//             </div>

//             {/* Telegram Group */}
//             <div className="text-center">
//               <FaTelegram className="text-teal-700 mx-auto" size={50} />
//               <p className="text-lg text-gray-700 mt-2">Telegram Group</p>
//             </div>

//             {/* Announcements */}
//             <div className="text-center">
//               <FaBullhorn className="text-teal-700 mx-auto" size={50} />
//               <p className="text-lg text-gray-700 mt-2">Announcements</p>
//             </div>

//             {/* Course Catalog */}
//             <div className="text-center">
//               <FaBook className="text-teal-700 mx-auto" size={50} />
//               <p className="text-lg text-gray-700 mt-2">Course Catalog</p>
//             </div>
//           </div>

//           <a className="text-lg text-red-600 mt-8 block text-center" href="#">
//             Click here to view Payments
//           </a>
//         </div>
//       </div>
    
//   );
// };

// export default StudentPortalWelcome;




import React, { useState } from "react";
import { FaFacebook, FaTelegram, FaBullhorn, FaBook } from "react-icons/fa";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

const StudentPortalWelcome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col justify-center items-center px-14">
        <h1 className="text-2xl font-bold text-teal-700 text-center">
          Welcome to U It Student Portal
        </h1>
        <a
          className="text-2xl font-semibold text-gray-700 mt-4 block text-center"
          href="#"
        >
          Click here to generate payment voucher
        </a>
        <p className="text-lg text-gray-600 mt-2 text-center">
          You will be able to view lectures anytime online once they are
          available on the portal.
        </p>

        <div className="flex justify-center items-center mt-6 space-x-6 flex-wrap">
          {/* Facebook Group */}
          <div className="text-center">
            <FaFacebook className="text-teal-700 mx-auto" size={50} />
            <p className="text-lg text-gray-700 mt-2">Facebook Group</p>
          </div>

          {/* Telegram Group */}
          <div className="text-center">
            <FaTelegram className="text-teal-700 mx-auto" size={50} />
            <p className="text-lg text-gray-700 mt-2">Telegram Group</p>
          </div>

          {/* Announcements */}
          <div className="text-center">
            <FaBullhorn className="text-teal-700 mx-auto" size={50} />
            <p className="text-lg text-gray-700 mt-2">Announcements</p>
          </div>

          {/* Course Catalog */}
          <div className="text-center">
            <FaBook className="text-teal-700 mx-auto" size={50} />
            <p className="text-lg text-gray-700 mt-2">Course Catalog</p>
          </div>
        </div>

        <a className="text-lg text-red-600 mt-8 block text-center" href="#">
          Click here to view Payments
        </a>
      </div>
    </div>
  );
};

export default StudentPortalWelcome;
