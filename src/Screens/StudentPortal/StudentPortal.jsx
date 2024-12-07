// StudentPortal.js
import React from "react";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";
import Header from "../../Components/StudentPortalPage/Header";
import CourseCard from "../../Components/StudentPortalPage/CoursCard";
import CourseGrid from "../../Components/StudentPortalPage/CoursGrid";

const StudentPortal = () => {
  const userImage =
    "https://storage.googleapis.com/a1aa/image/PDLF4XMpxVJbCRxBiTnZofSijmifpJetDRfsvbeJfCR75wHeJA.jpg";

  const currentCourses = [
    {
      title: "Certified Agentic and Robotic AI Engineer (CAE)",
      batch: "Batch 66",
      city: "Karachi",
      mode: "Onsite",
      status: "ENTRYTESTPASSED",
    },
    {
      title: "Certified Agentic and Robotic AI Engineer (CAE)",
      batch: "Batch 66",
      city: "Karachi",
      mode: "Onsite",
      status: "Failed",
    },
  ];

  const newCourses = [
    { city: "KARACHI", batch: 66 },
    { city: "LAHORE", batch: 67 },
    { city: "ISLAMABAD", batch: 68 },
    { city: "PESHAWAR", batch: 69 },
    { city: "FAISALABAD", batch: 70 },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* <Sidebar /> */}
      <div className="w-4/5 p-8">
        <Header userImage={userImage} />
        <div className="space-y-4">
          {currentCourses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              isFailed={course.status === "Failed"}
            />
          ))}
        </div>
        <h1 className="text-2xl font-bold mt-8">New Available Courses</h1>
        <CourseGrid courses={newCourses} />
      </div>
    </div>
  );
};

export default StudentPortal;









// import Sidebar from "../../Components/StudentPortalPage/Sidebar";
// import Header from "../../Components/StudentPortalPage/Header";
// import CourseCard from "../../Components/StudentPortalPage/CoursCard";
// import CourseGrid from "../../Components/StudentPortalPage/CoursGrid";

// import React from "react";

// const StudentPortal = () => {
//   const userImage =
//     "https://storage.googleapis.com/a1aa/image/PDLF4XMpxVJbCRxBiTnZofSijmifpJetDRfsvbeJfCR75wHeJA.jpg";

//   const currentCourses = [
//     {
//       title: "Certified Agentic and Robotic AI Engineer (CAE)",
//       batch: "Batch 66",
//       city: "Karachi",
//       mode: "Onsite",
//       status: "ENTRYTESTPASSED",
//     },
//     {
//       title: "Certified Agentic and Robotic AI Engineer (CAE)",
//       batch: "Batch 66",
//       city: "Karachi",
//       mode: "Onsite",
//       status: "Failed",
//     },
//   ];

//   const newCourses = [
//     { city: "KARACHI", batch: 66 },
//     { city: "LAHORE", batch: 67 },
//     { city: "ISLAMABAD", batch: 68 },
//     { city: "PESHAWAR", batch: 69 },
//     { city: "FAISALABAD", batch: 70 },
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 p-4 lg:p-8 overflow-auto">
//         <Header userImage={userImage} />
//         <div className="space-y-4">
//           {currentCourses.map((course, index) => (
//             <CourseCard
//               key={index}
//               course={course}
//               isFailed={course.status === "Failed"}
//             />
//           ))}
//         </div>
//         <h1 className="text-2xl font-bold mt-8">New Available Courses</h1>
//         <CourseGrid courses={newCourses} />
//       </div>
//     </div>
//   );
// };

// export default StudentPortal;











