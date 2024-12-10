

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaRobot, FaMobileAlt, FaLink, FaGlobe } from "react-icons/fa";

// const AvailablePrograms = ({ courses }) => { // Destructure courses
//   const navigate = useNavigate();

//   const handleProgramClick = (id) => {
//     navigate(`/courses/${id}`);
//   };

//   return (
//     <div className="bg-gray-100 p-6">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Available Programs</h2>
//         <div className="flex flex-wrap gap-4">
//           {courses && courses.length > 0 ? (
//             courses.map((course) => (
//               <div
//                 key={course.id}
//                 onClick={() => handleProgramClick(course.id)}
//                 className="cursor-pointer flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-auto hover:shadow-lg transition"
//               >
//                 <div className={`p-4 flex items-center justify-center bg-blue-900`}>
//                   <FaRobot className="text-white text-3xl" /> {/* Add icon logic here if needed */}
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{course.title}</h3>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No courses available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailablePrograms;












import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

const AvailablePrograms = ({ courses, isPage = false }) => {
  const navigate = useNavigate();

  const handleProgramClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div
      className={`${
        isPage ? "bg-gray-100 min-h-screen p-6" : "bg-white p-6"
      }`}
    >
      <div className="container mx-auto">
        {/* Add a back button if it's a page */}
        {isPage && (
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-500 underline"
          >
            Back
          </button>
        )}

        <h2
          className={`${
            isPage ? "text-3xl font-bold mb-6" : "text-2xl font-bold mb-4"
          }`}
        >
          Available Programs
        </h2>

        <div className="flex flex-wrap gap-4">
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleProgramClick(course.id)}
                className="cursor-pointer flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-auto hover:shadow-lg transition"
              >
                <div className={`p-4 flex items-center justify-center bg-blue-900`}>
                  <FaRobot className="text-white text-3xl" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailablePrograms;
