// import React, { useState } from "react";
// import { CourseNew } from "../../assets/Data";

// const VideoLectureManagement = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedBatch, setSelectedBatch] = useState(null);
//   const [selectedQuarter, setSelectedQuarter] = useState(null);
//   const [selectedModule, setSelectedModule] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleCourseChange = (event) => {
//     const selected = CourseNew.find((course) => course.courseTitle === event.target.value);
//     setSelectedCourse(selected);
//     setSelectedBatch(null);
//     setSelectedQuarter(null);
//     setSelectedModule(null);
//   };

//   const handleBatchChange = (event) => {
//     const selectedBatch = selectedCourse.batches.find((batch) => batch.batchId === event.target.value);
//     setSelectedBatch(selectedBatch);
//     setSelectedQuarter(null);
//     setSelectedModule(null);
//   };

//   const handleQuarterChange = (event) => {
//     const selectedQuarter = selectedCourse.courseQuarters.find((quarter) => quarter.quarterId === event.target.value);
//     setSelectedQuarter(selectedQuarter);
//     setSelectedModule(null);
//   };

//   const handleModuleChange = (event) => {
//     const selectedModule = selectedCourse.modules.find((module) => module.title === event.target.value);
//     setSelectedModule(selectedModule);
//   };

//   const handleModalOpen = () => setShowModal(true);
//   const handleModalClose = () => setShowModal(false);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage Video Lectures</h1>

//       {/* Course Selection */}
//       <div className="mb-4">
//         <label htmlFor="course" className="block text-xl mb-2">
//           Select Course
//         </label>
//         <select
//           id="course"
//           onChange={handleCourseChange}
//           value={selectedCourse?.courseTitle || ""}
//           className="w-full p-2 border rounded-lg"
//         >
//           <option value="">Select Course</option>
//           {CourseNew.map((course) => (
//             <option key={course.courseTitle} value={course.courseTitle}>
//               {course.courseTitle}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Batch Selection */}
//       {selectedCourse && (
//         <div className="mb-4">
//           <label htmlFor="batch" className="block text-xl mb-2">
//             Select Batch
//           </label>
//           <select
//             id="batch"
//             onChange={handleBatchChange}
//             value={selectedBatch?.batchId || ""}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">Select Batch</option>
//             {selectedCourse.batches.map((batch) => (
//               <option key={batch.batchId} value={batch.batchId}>
//                 {batch.batchId} - {batch.instructor}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Quarter Selection */}
//       {selectedBatch && (
//         <div className="mb-4">
//           <label htmlFor="quarter" className="block text-xl mb-2">
//             Select Quarter
//           </label>
//           <select
//             id="quarter"
//             onChange={handleQuarterChange}
//             value={selectedQuarter?.quarterId || ""}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">Select Quarter</option>
//             {selectedCourse.courseQuarters.map((quarter) => (
//               <option key={quarter.quarterId} value={quarter.quarterId}>
//                 {quarter.title} - Fee: ${quarter.fee}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Module Selection */}
//       {selectedQuarter && (
//         <div className="mb-4">
//           <label htmlFor="module" className="block text-xl mb-2">
//             Select Module
//           </label>
//           <select
//             id="module"
//             onChange={handleModuleChange}
//             value={selectedModule?.title || ""}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">Select Module</option>
//             {selectedCourse.modules
//               .filter((module) => module.quarterId === selectedQuarter.quarterId)
//               .map((module) => (
//                 <option key={module.title} value={module.title}>
//                   {module.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//       )}

//       {/* Manage Video Lectures Button */}
//       {selectedModule && (
//         <button
//           type="button"
//           onClick={handleModalOpen}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Manage Video Lectures for {selectedModule.title}
//         </button>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
//             <h2 className="text-2xl font-bold mb-4">
//               Manage Video Lectures - {selectedModule.title}
//             </h2>
//             {/* Video Lecture Management UI */}
//             <ModuleVideoLectures module={selectedModule} />
//             <button
//               type="button"
//               onClick={handleModalClose}
//               className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const ModuleVideoLectures = ({ module }) => {
//   const [lectures, setLectures] = useState(module?.videoLectures || []);

//   const addLecture = () => {
//     setLectures([
//       ...lectures,
//       { id: Date.now(), title: "", description: "", video: null },
//     ]);
//   };

//   const updateLecture = (index, field, value) => {
//     const updated = [...lectures];
//     updated[index][field] = value;
//     setLectures(updated);
//   };

//   const updateVideo = (index, file) => {
//     const updated = [...lectures];
//     updated[index].video = file;
//     setLectures(updated);
//   };

//   const removeLecture = (index) => {
//     setLectures(lectures.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     console.log("Saved Lectures:", lectures);
//   };

//   return (
//     <div>
//       {lectures.map((lecture, index) => (
//         <div key={lecture.id} className="mb-4 border p-2 rounded">
//           <input
//             type="text"
//             value={lecture.title}
//             placeholder="Lecture Title"
//             onChange={(e) => updateLecture(index, "title", e.target.value)}
//             className="w-full mb-2 p-1 border rounded"
//           />
//           <textarea
//             value={lecture.description}
//             placeholder="Lecture Description"
//             onChange={(e) => updateLecture(index, "description", e.target.value)}
//             className="w-full mb-2 p-1 border rounded"
//           />
//           <input
//             type="file"
//             onChange={(e) => updateVideo(index, e.target.files[0])}
//             className="w-full mb-2"
//           />
//           <button
//             type="button"
//             onClick={() => removeLecture(index)}
//             className="text-red-500"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={addLecture}
//         className="bg-blue-500 text-white px-2 py-1 rounded"
//       >
//         Add Lecture
//       </button>
//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="ml-2 bg-green-500 text-white px-2 py-1 rounded"
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default VideoLectureManagement;


















import React, { useState, useEffect } from "react";
import { CourseNew } from "../../assets/Data"; // Static Data or Replace with API

const VideoLectureManagement = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCourseChange = (event) => {
    const selected = CourseNew.find((course) => course.courseTitle === event.target.value);
    setSelectedCourse(selected);
    setSelectedBatch(null);
    setSelectedQuarter(null);
    setSelectedModule(null);
  };

  const handleBatchChange = (event) => {
    const selectedBatch = selectedCourse.batches.find((batch) => batch.batchId === event.target.value);
    setSelectedBatch(selectedBatch);
    setSelectedQuarter(null);
    setSelectedModule(null);
  };

  const handleQuarterChange = (event) => {
    const selectedQuarter = selectedCourse.courseQuarters.find((quarter) => quarter.quarterId === event.target.value);
    setSelectedQuarter(selectedQuarter);
    setSelectedModule(null);
  };

  const handleModuleChange = (event) => {
    const selectedModule = selectedCourse.modules.find((module) => module.title === event.target.value);
    setSelectedModule(selectedModule);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Video Lectures</h1>

      {/* Course Selection */}
      <div className="mb-4">
        <label htmlFor="course" className="block text-xl mb-2">
          Select Course
        </label>
        <select
          id="course"
          onChange={handleCourseChange}
          value={selectedCourse?.courseTitle || ""}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Course</option>
          {CourseNew.map((course) => (
            <option key={course.courseTitle} value={course.courseTitle}>
              {course.courseTitle}
            </option>
          ))}
        </select>
      </div>

      {/* Batch Selection */}
      {selectedCourse && (
        <div className="mb-4">
          <label htmlFor="batch" className="block text-xl mb-2">
            Select Batch
          </label>
          <select
            id="batch"
            onChange={handleBatchChange}
            value={selectedBatch?.batchId || ""}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Batch</option>
            {selectedCourse.batches.map((batch) => (
              <option key={batch.batchId} value={batch.batchId}>
                {batch.batchId} - {batch.instructor}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Quarter Selection */}
      {selectedBatch && (
        <div className="mb-4">
          <label htmlFor="quarter" className="block text-xl mb-2">
            Select Quarter
          </label>
          <select
            id="quarter"
            onChange={handleQuarterChange}
            value={selectedQuarter?.quarterId || ""}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Quarter</option>
            {selectedCourse.courseQuarters.map((quarter) => (
              <option key={quarter.quarterId} value={quarter.quarterId}>
                {quarter.title} - Fee: ${quarter.fee}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Module Selection */}
      {selectedQuarter && (
        <div className="mb-4">
          <label htmlFor="module" className="block text-xl mb-2">
            Select Module
          </label>
          <select
            id="module"
            onChange={handleModuleChange}
            value={selectedModule?.title || ""}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Module</option>
            {selectedCourse.modules
              .filter((module) => module.quarterId === selectedQuarter.quarterId)
              .map((module) => (
                <option key={module.title} value={module.title}>
                  {module.title}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Manage Video Lectures Button */}
      {selectedModule && (
        <button
          type="button"
          onClick={handleModalOpen}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Manage Video Lectures for {selectedModule.title}
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Manage Video Lectures - {selectedModule.title}
            </h2>
            {/* Video Lecture Management UI */}
            <ModuleVideoLectures module={selectedModule} />
            <button
              type="button"
              onClick={handleModalClose}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ModuleVideoLectures = ({ module }) => {
  const [lectures, setLectures] = useState(module?.videoLectures || []);

  const addLecture = () => {
    setLectures([
      ...lectures,
      { id: Date.now(), title: "", description: "", video: null },
    ]);
  };

  const updateLecture = (index, field, value) => {
    const updated = [...lectures];
    updated[index][field] = value;
    setLectures(updated);
  };

  const updateVideo = (index, file) => {
    const updated = [...lectures];
    updated[index].video = file;
    setLectures(updated);
  };

  const removeLecture = (index) => {
    setLectures(lectures.filter((_, i) => i !== index));
  };

  // const handleSubmit = async () => {
  //   const formData = new FormData();
  //   lectures.forEach((lecture, index) => {
  //     formData.append(`lectures[${index}][title]`, lecture.title);
  //     formData.append(`lectures[${index}][description]`, lecture.description);
  //     formData.append(`lectures[${index}][video]`, lecture.video);
  //   });

  //   try {
  //     const response = await fetch("/api/lectures", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       alert("Lectures saved successfully!");
  //     } else {
  //       throw new Error("Failed to save lectures.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error saving lectures.");
  //  }
 // };


 const handleSubmit = async () => {
  const formData = new FormData();

  // Add course, batch, quarter, and module metadata
  formData.append("courseTitle", module.courseTitle);
  formData.append("batchId", module.batchId);
  formData.append("quarterId", module.quarterId);
  formData.append("moduleTitle", module.title);

  // Add video lecture data
  lectures.forEach((lecture, index) => {
    formData.append(`lectures[${index}][title]`, lecture.title);
    formData.append(`lectures[${index}][description]`, lecture.description);
    formData.append(`lectures[${index}][video]`, lecture.video);
  });

  // Log the data to the console
  console.log("FormData being sent to backend:");
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

  // Send data to backend
  try {
    const response = await fetch("/api/lectures", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      alert("Lectures and metadata saved successfully!");
    } else {
      throw new Error("Failed to save lectures.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error saving lectures and metadata.");
  }
};


  return (
    <div>
      {lectures.map((lecture, index) => (
        <div key={lecture.id} className="mb-4 border p-2 rounded">
          <input
            type="text"
            value={lecture.title}
            placeholder="Lecture Title"
            onChange={(e) => updateLecture(index, "title", e.target.value)}
            className="w-full mb-2 p-1 border rounded"
          />
          <textarea
            value={lecture.description}
            placeholder="Lecture Description"
            onChange={(e) => updateLecture(index, "description", e.target.value)}
            className="w-full mb-2 p-1 border rounded"
          />
          <input
            type="file"
            onChange={(e) => updateVideo(index, e.target.files[0])}
            className="w-full mb-2"
          />
          <button
            type="button"
            onClick={() => removeLecture(index)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addLecture}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add Lecture
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="ml-2 bg-green-500 text-white px-2 py-1 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default VideoLectureManagement;
