

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// const AdmissionForm = ({ courses = [] }) => {
//   const [formData, setFormData] = useState({
//     country: "",
//     city: "",
//     course: "",
//     computerProficiency: "",
//     fullName: "",
//     fatherName: "",
//     phone: "",
//     cnic: "",
//     dob: "",
//     gender: "",
//     address: "",
//     qualification: "",
//     siblings: "",
//     photo: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // API integration can be added here
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl"
//       >
//         <h1 className="text-2xl font-bold text-center mb-6">Enrol Form</h1>
        
//         {/* Row 1 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1 font-semibold">Select Country</label>
//             <select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select country</option>
//               <option value="Pakistan">Pakistan</option>
            
//             </select>
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold">Select City</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select city</option>
//               <option value="Karachi">Karachi</option>
//               <option value="Lahore">Lahore</option>
//               <option value="Islamabad">Islamabad</option>
//             </select>
//           </div>
//         </div>

//         {/* Row 2 */}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block mb-1 font-semibold">Select Course</label>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select course</option>
//               {courses.length > 0 ? (
//                 courses.map((course, index) => (
//                   <option key={index} value={course.id}>
//                     {course.title}
//                   </option>
//                 ))
//               ) : (
//                 <option value="">No courses available</option>
//               )}
//             </select>
//           </div>




//           {/* <div>
//             <label className="block mb-1 font-semibold">Select Batch</label>
//             <select
//               name="course"
//               value={formData.batches}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select batch</option>
//               {courses.length > 0 ? (
//                 courses.map((course, index) => (
//                   <option key={index} value={course.id}>
//                     {course.title}
//                   </option>
//                 ))
//               ) : (
//                 <option value="">No courses available</option>
//               )}
//             </select>
//           </div> */}

// <div>
//   <label className="block mb-1 font-semibold">Select Batch</label>
//   <select
//     name="batch"
//     value={formData.batch}
//     onChange={handleChange}
//     className="w-full border rounded px-3 py-2"
//     required
//   >
//     <option value="">Select batch</option>
//     {courses.length > 0 ? (
//       courses.flatMap((course) =>
//         course.batches.map((batch) => (
//           <option key={batch.batchId} value={batch.batchId}>
//             {`${batch.batchId} - ${batch.startDate} to ${batch.endDate} (${batch.timing})`}
//           </option>
//         ))
//       )
//     ) : (
//       <option value="">No batches available</option>
//     )}
//   </select>
// </div>






//           <div>
//             <label className="block mb-1 font-semibold">
//               Computer Proficiency
//             </label>
//             <select
//               name="computerProficiency"
//               value={formData.computerProficiency}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select proficiency</option>
//               <option value="Beginner">Beginner</option>
//               <option value="Intermediate">Intermediate</option>
//               <option value="Expert">Expert</option>
//             </select>
//           </div>
//         </div>

//         {/* Row 3 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block mb-1 font-semibold">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold">Father Name</label>
//             <input
//               type="text"
//               name="fatherName"
//               value={formData.fatherName}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//         </div>

//         {/* Row 4 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block mb-1 font-semibold">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold">CNIC</label>
//             <input
//               type="text"
//               name="cnic"
//               value={formData.cnic}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//         </div>

//         {/* Row 5 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block mb-1 font-semibold">Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>

//         {/* Address */}
//         <div className="mt-4">
//           <label className="block mb-1 font-semibold">Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         {/* Qualification */}
//         <div className="mt-4">
//           <label className="block mb-1 font-semibold">Last Qualification</label>
//           <input
//             type="text"
//             name="qualification"
//             value={formData.qualification}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         {/* Siblings */}
//         <div className="mt-4">
//           <label className="block mb-1 font-semibold">Do you have siblings?</label>
//           <select
//             name="siblings"
//             value={formData.siblings}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           >
//             <option value="">Select</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </div>

//         {/* Photo */}
//         <div className="mt-4">
//           <label className="block mb-1 font-semibold">Upload Photo</label>
//           <input
//             type="file"
//             name="photo"
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         {/* i liking here after the admission and all process user get acccess his portal  */}
// <Link to='/Studentportal'>
//         <button
//           type="submit"
//           className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
//         >
//           Enroll Now
//         </button>
//         </Link>
//       </form>

//     </div>
//   );
// };

// export default AdmissionForm;













// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AdmissionForm = ({ courses = [] }) => {
//   const [formData, setFormData] = useState({
//     country: "",
//     city: "",
//     course: "",
//     batch: "",
//     computerProficiency: "",
//     fullName: "",
//     fatherName: "",
//     phone: "",
//     cnic: "",
//     dob: "",
//     gender: "",
//     address: "",
//     qualification: "",
//     siblings: "",
//     photo: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   // Get the batches for the selected course
//   const selectedCourseBatches =
//     courses.find((course) => course.id === formData.course)?.batches || [];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // API integration can be added here
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl"
//       >
//         <h1 className="text-2xl font-bold text-center mb-6">Enroll Form</h1>

//         {/* Row 1 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1 font-semibold">Select Country</label>
//             <select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select country</option>
//               <option value="Pakistan">Pakistan</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold">Select City</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select city</option>
//               <option value="Karachi">Karachi</option>
//               <option value="Lahore">Lahore</option>
//               <option value="Islamabad">Islamabad</option>
//             </select>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block mb-1 font-semibold">Select Course</label>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//             >
//               <option value="">Select course</option>
//               {courses.length > 0 ? (
//                 courses.map((course, index) => (
//                   <option key={index} value={course.id}>
//                     {course.title}
//                   </option>
//                 ))
//               ) : (
//                 <option value="">No courses available</option>
//               )}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Select Batch</label>
//             <select
//               name="batch"
//               value={formData.batch}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               required
//               disabled={!formData.course} // Disable until a course is selected
//             >
//               <option value="">Select batch</option>
//               {selectedCourseBatches.length > 0 ? (
//                 selectedCourseBatches.map((batch) => (
//                   <option key={batch.batchId} value={batch.batchId}>
//                     {`${batch.batchId} - ${batch.startDate} to ${batch.endDate} (${batch.timing})`}
//                   </option>
//                 ))
//               ) : (
//                 <option value="">No batches available</option>
//               )}
//             </select>
//           </div>
//         </div>

//         {/* Other fields */}
//         <div className="mt-4">
//           <label className="block mb-1 font-semibold">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div className="mt-4">
//           <label className="block mb-1 font-semibold">Father Name</label>
//           <input
//             type="text"
//             name="fatherName"
//             value={formData.fatherName}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <Link to="/Studentportal">
//           <button
//             type="submit"
//             className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
//           >
//             Enroll Now
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default AdmissionForm;













import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdmissionForm = ({ courses = [] }) => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    course: "",
    batch: "",
    computerProficiency: "",
    fullName: "",
    fatherName: "",
    phone: "",
    cnic: "",
    dob: "",
    gender: "",
    address: "",
    qualification: "",
    siblings: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Get the batches for the selected course
  const selectedCourseBatches =
    courses.find((course) => course.id === formData.course)?.batches || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // API integration can be added here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Enroll Form</h1>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select country</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1 font-semibold">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select course</option>
              {courses.map((course, index) => (
                <option key={index} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Batch</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              disabled={!formData.course}
            >
              <option value="">Select batch</option>
              {selectedCourseBatches.map((batch) => (
                <option key={batch.batchId} value={batch.batchId}>
                  {`${batch.batchId} - ${batch.startDate} to ${batch.endDate} (${batch.timing})`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Other Fields */}
        {[
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Father Name", name: "fatherName", type: "text" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "CNIC", name: "cnic", type: "text" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
          { label: "Address", name: "address", type: "text" },
          { label: "Qualification", name: "qualification", type: "text" },
          { label: "Computer Proficiency", name: "computerProficiency", type: "text" },
          { label: "Siblings", name: "siblings", type: "number" },
        ].map(({ label, name, type, options }) => (
          <div className="mt-4" key={name}>
            <label className="block mb-1 font-semibold">{label}</label>
            {type === "select" ? (
              <select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select {label.toLowerCase()}</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            )}
          </div>
        ))}

        {/* Photo Upload */}
        <div className="mt-4">
          <label className="block mb-1 font-semibold">Upload Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <Link to="/Studentportal">
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            Enroll Now
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AdmissionForm;
