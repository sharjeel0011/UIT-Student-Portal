// // CourseGrid.js
// import React from "react";

// const CourseGrid = ({ courses }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//       {courses.map((course, index) => (
//         <div
//           key={index}
//           className="bg-white p-4 rounded-lg shadow text-center"
//         >
//           <h2 className="text-xl font-bold">{course.city}</h2>
//           <p>Batch {course.batch}</p>
//           <a href="#" className="text-red-500">
//             Click here to view courses
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseGrid;


















// CourseGrid.js
import React from "react";

const CourseGrid = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow text-center"
        >
          <h2 className="text-xl font-bold">{course.courseName}</h2>
          <p>Batch {course.batch}</p>
          <a href="#" className="text-red-500">
            Click here to view courses
          </a>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
