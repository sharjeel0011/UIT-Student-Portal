// import React from "react";
// import Sidebar from '../../Components/Admincomponents/Sidebar'

// const CertificationBatches = () => {
//   const batches = [
//     { title: "Certified Agentic and Robotic", batch: "Batch 66" },
//     { title: "Certified Agentic and Robotic", batch: "Batch 67" },
//     { title: "Certified Agentic and Robotic", batch: "Batch 68" },
//     { title: "Certified Agentic and Robotic", batch: "Batch 69" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//     {/* Sidebar */}
//      <Sidebar/>
//     <div className="bg-gray-100 flex justify-center items-center min-h-screen">
       
//       <div className="flex flex-wrap justify-center gap-4">
//         {batches.map((batch, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-full px-6 py-4 text-center"
//           >
//             <p className="text-sm font-semibold text-gray-800">
//               {batch.title}
//             </p>
//             <p className="text-xs text-gray-600">{batch.batch}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CertificationBatches;






// // import React, { useState } from "react";
// // import CourseSelection from "../../Components/Admincomponents/Textbookadd/CourseSection";
// // import BatchSelection from "../../Components/Admincomponents/VideoLectureAdd/BatchSelection";
// // import VideoLectureManagement from "../../Components/Admincomponents/VideoLectureAdd/VideoLectureManagement";
// // import { courses } from "../../assets/Data";

// // const VideoLectureScreen = () => {
// //   const [selectedCourse, setSelectedCourse] = useState(null);
// //   const [selectedBatch, setSelectedBatch] = useState(null);

// //   // Step 1: Course Selection
// //   if (!selectedCourse) {
// //     return <CourseSelection courses={courses} onSelectCourse={setSelectedCourse} />;
// //   }

// //   // Step 2: Batch Selection
// //   if (!selectedBatch) {
// //     return <BatchSelection course={selectedCourse} onSelectBatch={setSelectedBatch} />;
// //   }

// //   // Step 3: Video Lecture Management
// //   return <VideoLectureManagement batch={selectedBatch} />;
// // };

// // export default VideoLectureScreen;

















import React, { useState } from "react";
import CourseSelection from "../../Components/Admincomponents/Textbookadd/CourseSection";
import BatchSelection from "../../Components/Admincomponents/Textbookadd/BatchSection";
import VideoLectureManagement from "../../Components/Admincomponents/VideoLecture/Videoaddmanage";
import { courses } from "../../assets/Data";

const VideoLectureScreen = () => {
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

  // Step 3: Video Lecture Management
  return <VideoLectureManagement batch={selectedBatch} />;
};

export default VideoLectureScreen;
