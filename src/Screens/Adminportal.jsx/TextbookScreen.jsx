// import React from "react";
// import Sidebar from '../../Components/Admincomponents/Sidebar'
// const TextbookScreen = () => {
//   const textbooks = [
//     { title: "Advanced Robotics", edition: "3rd Edition" },
//     { title: "Artificial Intelligence Basics", edition: "1st Edition" },
//     { title: "Machine Learning Fundamentals", edition: "2nd Edition" },
//     { title: "Data Science Essentials", edition: "4th Edition" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//     {/* Sidebar */}
//     <Sidebar />
//     <div className="bg-gray-100 flex justify-center items-center min-h-screen">
       
//       <div className="flex flex-wrap justify-center gap-4">
//         {textbooks.map((book, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-full px-6 py-4 text-center"
//           >
//             <p className="text-sm font-semibold text-gray-800">{book.title}</p>
//             <p className="text-xs text-gray-600">{book.edition}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default TextbookScreen;







import React, { useState } from "react";
import CourseSelection from "../../Components/Admincomponents/Textbookadd/CourseSection";
import BatchSelection from "../../Components/Admincomponents/Textbookadd/BatchSection";
import TextbookManagement from "../../Components/Admincomponents/Textbookadd/TextBookManagement";
import { courses } from "../../assets/Data";

const TextbookScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Step 1: Course Selection
  if (!selectedCourse) {
    return <CourseSelection courses={courses} onSelectCourse={setSelectedCourse} />;
  }

  // Step 2: Batch Selection
  if (!selectedBatch) {
    return <BatchSelection course={selectedCourse} onSelectBatch={setSelectedBatch} />;
  }

  // Step 3: Textbook Management
  return <TextbookManagement batch={selectedBatch} />;
};

export default TextbookScreen;
