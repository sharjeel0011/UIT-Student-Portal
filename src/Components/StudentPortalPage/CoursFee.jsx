// import React from "react";
// import QuaterFormPage from'../../Components/StudentPortalPage/QuarterVocher'
// import Sidebar from '../../Components/StudentPortalPage/Sidebar'
// import { FaExclamationCircle, FaLock } from "react-icons/fa";

// const CourseStatus = () => {
//   // Sample data for quarters (can be dynamic)
//   const quarters = [
//     { id: 1, batch: "Batch 66", name: "Quarter 1", status: "Pending", bgColor: "bg-red-100", textColor: "text-red-500", icon: <FaExclamationCircle /> },
//     { id: 2, batch: "Batch 66", name: "Quarter 2", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
//     { id: 3, batch: "Batch 66", name: "Quarter 3", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
//     { id: 4, batch: "Batch 66", name: "Quarter 4", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
//     { id: 5, batch: "Batch 66", name: "Quarter 5", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
//   ];

//   return (
//     <div className="bg-white flex flex-wrap items-center justify-center min-h-screen">
//       <Sidebar/>
//       <div className="w-full max-w-5xl p-4">
//         <h1 className="text-2xl font-semibold mb-6">Certified Agentic and Robotic AI Engineer</h1>
//         <div className="flex flex-wrap gap-4">
//           {quarters.map((quarter) => (
//             <div
//               key={quarter.id}
//               className={`flex flex-col items-center justify-center w-40 h-24 ${quarter.bgColor} rounded-lg shadow-md`}
//             >
//               <span className="text-sm text-gray-500">{quarter.batch}</span>
//               <span className="text-lg font-semibold">{quarter.name}</span>
//               <span className={`text-xs ${quarter.textColor} flex items-center gap-1`}>
//                 {quarter.icon} {quarter.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <QuaterFormPage/>
//     </div>
//   );
// };

// export default CourseStatus;











import React from "react";
import QuaterFormPage from "../../Components/StudentPortalPage/QuarterVocher";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";
import { FaExclamationCircle, FaLock } from "react-icons/fa";

const CourseStatus = () => {
  // Sample data for quarters (can be dynamic)
  const quarters = [
    { id: 1, batch: "Batch 66", name: "Quarter 1", status: "Pending", bgColor: "bg-red-100", textColor: "text-red-500", icon: <FaExclamationCircle /> },
    { id: 2, batch: "Batch 66", name: "Quarter 2", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
    { id: 3, batch: "Batch 66", name: "Quarter 3", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
    { id: 4, batch: "Batch 66", name: "Quarter 4", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
    { id: 5, batch: "Batch 66", name: "Quarter 5", status: "Locked", bgColor: "bg-gray-200", textColor: "text-gray-500", icon: <FaLock /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-1/4 min-h-screen bg-white shadow-md" />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">
            Certified Agentic and Robotic AI Engineer
          </h1>

          {/* Quarter Cards */}
          <div className="flex flex-wrap gap-6">
            {quarters.map((quarter) => (
              <div
                key={quarter.id}
                className={`flex flex-col items-center justify-center w-40 h-24 ${quarter.bgColor} rounded-lg shadow-md`}
              >
                <span className="text-sm text-gray-500">{quarter.batch}</span>
                <span className="text-lg font-semibold text-gray-800">{quarter.name}</span>
                <span className={`text-xs ${quarter.textColor} flex items-center gap-1`}>
                  {quarter.icon} {quarter.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quarter Form */}
        <div className="mt-6">
          <QuaterFormPage />
        </div>
      </div>
    </div>
  );
};

export default CourseStatus;
