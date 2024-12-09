// import React from "react";
// import Sidebar from "../../Components/StudentPortalPage/Sidebar";
// const Profile = () => {
//   // Static student data
//   const studentData = {
//     name: "Ali",
//     fatherName: "Muhammad",
//     rollNo: "UIT182271",
//     batch: "Batch 66",
//     city: "Karachi",
//     gender: "Male",
//     course: "Certified Agentic and Robotic AI Engineer",
//     email: "ali@gmail.com",
//     profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//     {/* Sidebar */}
//     <Sidebar className="w-1/4 min-h-screen bg-white shadow-md" />
//     <div className="flex flex-col items-center min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <div className="bg-blue-600 w-full py-6 text-white text-center shadow-md">
//         <h1 className="text-2xl font-bold">Student Profile</h1>
//         <p className="text-sm">Manage and review your profile details</p>
//       </div>

//       {/* Profile Card */}
//       <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-1/2 mt-6 p-6">
//         {/* Profile Picture */}
//         <div className="flex justify-center">
//           <img
//             src={studentData.profileImage}
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md"
//           />
//         </div>

//         {/* Profile Info */}
//         <div className="mt-6 text-center">
//           <h2 className="text-2xl font-semibold">{studentData.name}</h2>
//           <p className="text-gray-600">{studentData.course}</p>
//         </div>

//         {/* Profile Details */}
//         <div className="mt-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="text-gray-700">
//               <p className="font-semibold">Name:</p>
//               <p>{studentData.name}</p>
//             </div>
//             <div className="text-gray-700">
//               <p className="font-semibold">Father's Name:</p>
//               <p>{studentData.fatherName}</p>
//             </div>
//             <div className="text-gray-700">
//               <p className="font-semibold">Roll No:</p>
//               <p>{studentData.rollNo}</p>
//             </div>
//             <div className="text-gray-700">
//               <p className="font-semibold">Batch:</p>
//               <p>{studentData.batch}</p>
//             </div>
//             <div className="text-gray-700">
//               <p className="font-semibold">City:</p>
//               <p>{studentData.city}</p>
//             </div>
//             <div className="text-gray-700">
//               <p className="font-semibold">Gender:</p>
//               <p>{studentData.gender}</p>
//             </div>
//             <div className="text-gray-700 sm:col-span-2">
//               <p className="font-semibold">Email:</p>
//               <p>{studentData.email}</p>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
//           <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
//             Change Password
//           </button>
//           <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
//             Get Card
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Profile;









import React from "react";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

const Profile = () => {
  // Static student data
  const studentData = {
    name: "Ali",
    fatherName: "Muhammad",
    rollNo: "UIT182271",
    batch: "Batch 66",
    city: "Karachi",
    gender: "Male",
    course: "Certified Agentic and Robotic AI Engineer",
    email: "ali@gmail.com",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 min-h-screen bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Profile Content */}
      <div className="flex-grow p-6 bg-gray-50">
        {/* Header Section */}
        <div className="bg-blue-600 w-full py-6 text-white text-center shadow-md rounded-md">
          <h1 className="text-2xl font-bold">Student Profile</h1>
          <p className="text-sm">Manage and review your profile details</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 mx-auto mt-8 p-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img
              src={studentData.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md"
            />
          </div>

          {/* Profile Info */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">{studentData.name}</h2>
            <p className="text-gray-600">{studentData.course}</p>
          </div>

          {/* Profile Details */}
          <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-gray-700">
                <p className="font-semibold">Name:</p>
                <p>{studentData.name}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Father's Name:</p>
                <p>{studentData.fatherName}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Roll No:</p>
                <p>{studentData.rollNo}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Batch:</p>
                <p>{studentData.batch}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">City:</p>
                <p>{studentData.city}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Gender:</p>
                <p>{studentData.gender}</p>
              </div>
              <div className="text-gray-700 sm:col-span-2">
                <p className="font-semibold">Email:</p>
                <p>{studentData.email}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
              Change Password
            </button>
            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
              Get Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
