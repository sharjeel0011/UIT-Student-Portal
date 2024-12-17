














// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../../Components/StudentPortalPage/Sidebar";

// const Profile = () => {
//   const history = useNavigate();

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

//   // Handle Get Card button click
//   const handleGetCardClick = () => {
//     history.push("/id-card", { student: studentData });
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 min-h-screen bg-white shadow-md">
//         <Sidebar />
//       </div>

//       {/* Profile Content */}
//       <div className="flex-grow p-6 bg-gray-50">
//         {/* Header Section */}
//         <div className="bg-blue-600 w-full py-6 text-white text-center shadow-md rounded-md">
//           <h1 className="text-2xl font-bold">Student Profile</h1>
//           <p className="text-sm">Manage and review your profile details</p>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 mx-auto mt-8 p-6">
//           {/* Profile Picture */}
//           <div className="flex justify-center">
//             <img
//               src={studentData.profileImage}
//               alt="Profile"
//               className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md"
//             />
//           </div>

//           {/* Profile Info */}
//           <div className="mt-6 text-center">
//             <h2 className="text-2xl font-semibold">{studentData.name}</h2>
//             <p className="text-gray-600">{studentData.course}</p>
//           </div>

//           {/* Profile Details */}
//           <div className="mt-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="text-gray-700">
//                 <p className="font-semibold">Name:</p>
//                 <p>{studentData.name}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Father's Name:</p>
//                 <p>{studentData.fatherName}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Roll No:</p>
//                 <p>{studentData.rollNo}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Batch:</p>
//                 <p>{studentData.batch}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">City:</p>
//                 <p>{studentData.city}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Gender:</p>
//                 <p>{studentData.gender}</p>
//               </div>
//               <div className="text-gray-700 sm:col-span-2">
//                 <p className="font-semibold">Email:</p>
//                 <p>{studentData.email}</p>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
//             <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
//               Change Password
//             </button>
//             <button
//               className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
//               onClick={handleGetCardClick}
//             >
//               Get Card
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;












// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();

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

//   const handleGetCardClick = () => {
//     navigate("/id-card", { state: { student: studentData } });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       <div className="w-full text-center mb-6">
//         <h1 className="text-2xl font-bold text-blue-900">Student Profile</h1>
//         <button
//           onClick={handleGetCardClick}
//           className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition ease-in-out duration-300"
//         >
//           Get Card
//         </button>
//       </div>

//       <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6 text-center">
//         <img
//           src={studentData.profileImage}
//           alt="Profile"
//           className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md mx-auto mb-6"
//         />
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">{studentData.name}</h2>
//         <p className="text-gray-600 mb-2">{studentData.course}</p>
//         <p className="text-gray-600 mb-2">Roll No: {studentData.rollNo}</p>
//         <p className="text-gray-600 mb-2">Batch: {studentData.batch}</p>
//         <p className="text-gray-600 mb-2">City: {studentData.city}</p>
//         <p className="text-gray-600 mb-2">Gender: {studentData.gender}</p>
//         <p className="text-gray-600 mb-2">Email: {studentData.email}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();

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

//   const handleGetCardClick = () => {
//     navigate("/id-card", { state: { student: studentData } });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       <div className="w-full text-center mb-6">
//         <h1 className="text-2xl font-bold text-blue-900">Student Profile</h1>
//         <button
//           onClick={handleGetCardClick}
//           className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition ease-in-out duration-300"
//         >
//           Get Card
//         </button>
//       </div>

//       <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6 text-center">
//         <img
//           src={studentData.profileImage}
//           alt="Profile"
//           className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md mx-auto mb-6"
//         />
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">{studentData.name}</h2>
//         <p className="text-gray-600 mb-2">{studentData.course}</p>
//         <p className="text-gray-600 mb-2">Roll No: {studentData.rollNo}</p>
//         <p className="text-gray-600 mb-2">Batch: {studentData.batch}</p>
//         <p className="text-gray-600 mb-2">City: {studentData.city}</p>
//         <p className="text-gray-600 mb-2">Gender: {studentData.gender}</p>
//         <p className="text-gray-600 mb-2">Email: {studentData.email}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;












// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../../Components/StudentPortalPage/Sidebar";

// const Profile = () => {
//   const navigate = useNavigate();

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

//   const handleGetCardClick = () => {
//     navigate("/id-card", { state: { student: studentData } });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className="w-1/4 min-h-screen bg-white shadow-lg">
//         <Sidebar />
//       </div>

//       {/* Profile Content */}
//       <div className="flex-grow p-6 bg-gray-50">
//         {/* Header Section */}
//         <div className="bg-blue-700 w-full py-6 text-white text-center shadow-lg rounded-md">
//           <h1 className="text-3xl font-bold">Student Profile</h1>
//           <p className="text-sm">Manage and review your profile details</p>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 mx-auto mt-8 p-8">
//           {/* Profile Picture */}
//           <div className="flex justify-center">
//             <img
//               src={studentData.profileImage}
//               alt="Profile"
//               className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
//             />
//           </div>

//           {/* Profile Info */}
//           <div className="mt-6 text-center">
//             <h2 className="text-2xl font-semibold text-gray-800">{studentData.name}</h2>
//             <p className="text-gray-600 mt-2">{studentData.course}</p>
//           </div>

//           {/* Profile Details */}
//           <div className="mt-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div className="text-gray-700">
//                 <p className="font-semibold">Name:</p>
//                 <p>{studentData.name}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Father's Name:</p>
//                 <p>{studentData.fatherName}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Roll No:</p>
//                 <p>{studentData.rollNo}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Batch:</p>
//                 <p>{studentData.batch}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">City:</p>
//                 <p>{studentData.city}</p>
//               </div>
//               <div className="text-gray-700">
//                 <p className="font-semibold">Gender:</p>
//                 <p>{studentData.gender}</p>
//               </div>
//               <div className="text-gray-700 sm:col-span-2">
//                 <p className="font-semibold">Email:</p>
//                 <p>{studentData.email}</p>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
//             <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
//               Change Password
//             </button>
//             <button
//               className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
//               onClick={handleGetCardClick}
//             >
//               Get Card
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "Ali",
    fatherName: "Muhammad",
    rollNo: "UIT182271",
    batch: "Batch 66",
    city: "Karachi",
    gender: "Male",
    course: "Certified Agentic and Robotic AI Engineer",
    email: "ali@gmail.com",
    profileImage: "https://via.placeholder.com/150",
  });

  const handleGetCardClick = () => {
    navigate("/id-card", { state: { student: formData } });
  };

  const handleEditProfileSubmit = () => {
    // You can update the formData here and save the changes
    setIsEditModalOpen(false);
  };

  const handleChangePasswordSubmit = () => {
    // Handle password change logic here
    setIsChangePasswordModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/4 min-h-screen bg-white shadow-lg">
        <Sidebar />
      </div>

      <div className="flex-grow p-6 bg-gray-50">
        <div className="bg-blue-700 w-full py-6 text-white text-center shadow-lg rounded-md">
          <h1 className="text-3xl font-bold">Student Profile</h1>
          <p className="text-sm">Manage and review your profile details</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 mx-auto mt-8 p-8">
          <div className="flex justify-center">
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
            />
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">{formData.name}</h2>
            <p className="text-gray-600 mt-2">{formData.course}</p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-gray-700">
                <p className="font-semibold">Name:</p>
                <p>{formData.name}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Father's Name:</p>
                <p>{formData.fatherName}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Roll No:</p>
                <p>{formData.rollNo}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Batch:</p>
                <p>{formData.batch}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">City:</p>
                <p>{formData.city}</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Gender:</p>
                <p>{formData.gender}</p>
              </div>
              <div className="text-gray-700 sm:col-span-2">
                <p className="font-semibold">Email:</p>
                <p>{formData.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
            <button
              onClick={() => setIsChangePasswordModalOpen(true)}
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Change Password
            </button>

            <button
              onClick={() => setIsEditModalOpen(true)}
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Edit Profile
            </button>

            <button
              onClick={handleGetCardClick}
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Get Card
            </button>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded px-3 py-2 mb-4"
          />
        </div>
        <div>
          <label className="block mb-1">Father's Name:</label>
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) =>
              setFormData({ ...formData, fatherName: e.target.value })
            }
            className="w-full border rounded px-3 py-2 mb-4"
          />
        </div>
        {/* Add more fields here */}
        <button
          onClick={handleEditProfileSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Save Changes
        </button>
      </Modal>

      {/* Change Password Modal */}
      <Modal
        isOpen={isChangePasswordModalOpen}
        onClose={() => setIsChangePasswordModalOpen(false)}
      >
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <div>
          <label className="block mb-1">Gmail:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border rounded px-3 py-2 mb-4"
          />
        </div>
        <div>
          <label className="block mb-1">New Password:</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 mb-4"
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password:</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 mb-4"
          />
        </div>
        <button
          onClick={handleChangePasswordSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Save New Password
        </button>
      </Modal>
    </div>
  );
};

export default Profile;
