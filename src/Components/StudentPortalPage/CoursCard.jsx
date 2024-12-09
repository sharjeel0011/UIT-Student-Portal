// CourseCard.js
import React from "react";
import { Link } from 'react-router-dom';

const CourseCard = ({ course, isFailed }) => {
  const statusClass = isFailed ? "text-red-500" : "text-green-500";

  return (
   
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div>
      <div className="flex items-center space-x-4">
        {/* <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isFailed ? "bg-red-500" : "bg-green-500"
          }`}
        >
          <i className="fas fa-robot text-white text-2xl" />
        </div> */}
        <div>
          <h2 className="text-lg font-bold">{course.title}</h2>
          <p>Batch: {course.batch} | City: {course.city}</p>
          <p>
            Currently: {course.mode} | Status:{" "}
            <span className={statusClass}>{course.status}</span>
          </p>
        </div>
      </div>
      <button className="bg-blue-900 text-white px-2 py-2 rounded-lg">
       <Link to='/home'>Open Portal</Link> 
      </button>
     </div>
    </div>
     
  
  );
};

export default CourseCard;










// // CourseCard.js
// import React from "react";

// const CourseCard = ({ course, isFailed }) => {
//   const statusClass = isFailed ? "text-red-500" : "text-green-500";

//   return (
//     <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//       <div className="flex items-center space-x-4">
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center ${
//             isFailed ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           <i className="fas fa-robot text-white text-2xl" />
//         </div>
//         <div>
//           <h2 className="text-lg font-bold">{course.title}</h2>
//           <p>Batch: {course.batch} | City: {course.city}</p>
//           <p>
//             Currently: {course.mode} | Status:{" "}
//             <span className={statusClass}>{course.status}</span>
//           </p>
//         </div>
//       </div>
//       <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
//         Open Portal
//       </button>
//     </div>
//   );
// };

// export default CourseCard;
