// import React from "react";

// const ExamScreen = () => {
//   return (
    
//     <div className="flex flex-col items-center  justify-center min-h-screen bg-gray-100 px-4">
//       <h1 className="text-lg font-semibold mb-6">EXAM</h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600">
//           Download Safe Exam Browser for Windows
//         </button>
//         <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600">
//           Download Safe Exam Browser for Mac
//         </button>
//       </div>
//       <p className="mt-4 text-sm text-gray-600">
//         For Windows Version 2.4 is required and For Mac Version 2.1.4
//       </p>
//       <div className="flex flex-wrap justify-center gap-4 mt-6">
//         <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300">
//           Click to Download our Quiz Config File for Windows
//         </button>
//         <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300">
//           Click to Download our Quiz Config File for Mac
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExamScreen;










import React from "react";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

// Define reusable styles
const BUTTON_STYLES = {
  primary: "px-6 py-3 font-medium rounded-lg shadow bg-blue-500 text-white hover:bg-blue-600",
  secondary: "px-6 py-3 font-medium rounded-lg shadow bg-gray-200 text-gray-800 hover:bg-gray-300",
};

const ExamScreen = () => {
  // Dynamic data for buttons and descriptions
  const examData = [
    { label: "Download Safe Exam Browser for Windows", style: "primary" },
    { label: "Download Safe Exam Browser for Mac", style: "primary" },
  ];

  const configData = [
    { label: "Click to Download our Quiz Config File for Windows", style: "secondary" },
    { label: "Click to Download our Quiz Config File for Mac", style: "secondary" },
  ];

  return (
    <div className="flex min-h-screen p-20 bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="text-lg font-semibold mb-6">EXAM</h1>

        {/* Exam Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {examData.map((item, index) => (
            <button key={index} className={BUTTON_STYLES[item.style]}>
              {item.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600 text-center">
          For Windows Version 2.4 is required and For Mac Version 2.1.4
        </p>

        {/* Config File Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {configData.map((item, index) => (
            <button key={index} className={BUTTON_STYLES[item.style]}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamScreen;
