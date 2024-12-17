
// import React, { useState } from "react";

// export const coursesData = [
//   {
//     id: "ai",
//     title: "Artificial Intelligence",
//     description:
//       "Artificial Intelligence (AI) is a cutting-edge field that leverages algorithms to simulate human intelligence. This course covers modern AI techniques and applications.",
//     metadata: {
//       category: "Technology",
//       level: "Intermediate",
//       tags: ["AI", "ML", "Technology"],
//     },
//   },
//   {
//     id: "cloud",
//     title: "Cloud Learning",
//     description:
//       "Cloud Learning covers cloud computing, storage solutions, and deployment strategies for modern applications.",
//     metadata: {
//       category: "Technology",
//       level: "Beginner",
//       tags: ["Cloud", "Computing", "Technology"],
//     },
//   },
// ];

// const AdminCourses = () => {
//   const [courses, setCourses] = useState(coursesData); // Manage courses state
//   const [deleteCourseId, setDeleteCourseId] = useState(null); // Track the course to delete
//   const [editCourse, setEditCourse] = useState(null); // Track the course to edit

//   // Open the delete confirmation modal
//   const openDeleteModal = (id) => {
//     setDeleteCourseId(id);
//   };

//   // Confirm and delete the course
//   const handleConfirmDelete = () => {
//     const updatedCourses = courses.filter((course) => course.id !== deleteCourseId);
//     setCourses(updatedCourses);
//     setDeleteCourseId(null); // Close the modal
//   };

//   // Cancel the delete operation
//   const handleCancelDelete = () => {
//     setDeleteCourseId(null);
//   };

//   // Open the edit modal with the selected course
//   const openEditModal = (course) => {
//     setEditCourse(course);
//   };

//   // Handle saving the updated course details
//   const handleSaveEdit = (updatedCourse) => {
//     const updatedCourses = courses.map((course) =>
//       course.id === updatedCourse.id ? updatedCourse : course
//     );
//     setCourses(updatedCourses);
//     setEditCourse(null); // Close the modal
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin: Manage Courses</h1>

//       {/* Render the list of courses */}
//       <div className="grid gap-4">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
//           >
//             <div>
//               <h2 className="text-xl font-bold">{course.title}</h2>
//               <p className="text-gray-600">{course.description}</p>
//               <p className="text-sm text-gray-500">
//                 Category: {course.metadata.category}
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => openEditModal(course)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => openDeleteModal(course.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Delete confirmation modal */}
//       {deleteCourseId && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
//             <p className="text-gray-700">
//               Are you sure you want to delete this course? This action cannot be undone.
//             </p>
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 onClick={handleCancelDelete}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmDelete}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Confirm Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit course modal */}
//       {editCourse && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const updatedCourse = {
//                   ...editCourse,
//                   title: e.target.title.value,
//                   description: e.target.description.value,
//                   metadata: {
//                     ...editCourse.metadata,
//                     category: e.target.category.value,
//                   },
//                 };
//                 handleSaveEdit(updatedCourse);
//               }}
//             >
//               <div className="mb-4">
//                 <label className="block font-medium mb-2">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   defaultValue={editCourse.title}
//                   className="border rounded w-full px-3 py-2"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block font-medium mb-2">Description</label>
//                 <textarea
//                   name="description"
//                   defaultValue={editCourse.description}
//                   className="border rounded w-full px-3 py-2"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block font-medium mb-2">Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   defaultValue={editCourse.metadata.category}
//                   className="border rounded w-full px-3 py-2"
//                   required
//                 />
//               </div>
//               <div className="mt-6 flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setEditCourse(null)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-500 text-white px-4 py-2 rounded"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCourses;











import React, { useState } from "react";
import { CourseNew } from "../../assets/Data";
const AdminCourses = () => {
  const [courses, setCourses] = useState(CourseNew);
  const [deleteCourseId, setDeleteCourseId] = useState(null);
  const [editCourse, setEditCourse] = useState(null);

  const openDeleteModal = (id) => {
    setDeleteCourseId(id);
  };

  const handleConfirmDelete = () => {
    const updatedCourses = courses.filter((course) => course.id !== deleteCourseId);
    setCourses(updatedCourses);
    setDeleteCourseId(null);
  };

  const handleCancelDelete = () => {
    setDeleteCourseId(null);
  };

  const openEditModal = (course) => {
    setEditCourse(course);
  };

  const handleSaveEdit = (updatedCourse) => {
    const updatedCourses = courses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setCourses(updatedCourses);
    setEditCourse(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin: Manage Courses</h1>
      <div className="grid gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{course.courseTitle}</h2>
              <p className="text-gray-600">{course.courseDescription}</p>
              <p className="text-sm text-gray-500">
                Quarters: {course.courseQuarters.length}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openEditModal(course)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => openDeleteModal(course.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation modal */}
      {deleteCourseId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p className="text-gray-700">
              Are you sure you want to delete this course? This action cannot be undone.
            </p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit course modal */}
      {editCourse && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-96 overflow-y-auto ">
      <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const updatedCourse = {
            ...editCourse,
            courseTitle: e.target.courseTitle.value,
            courseDescription: e.target.courseDescription.value,
            modules: editCourse.modules.map((module, idx) => ({
              ...module,
              title: e.target[`moduleTitle-${idx}`]?.value || module.title,
              description:
                e.target[`moduleDescription-${idx}`]?.value || module.description,
            })),
            batches: editCourse.batches.map((batch, idx) => ({
              ...batch,
              startDate: e.target[`batchStartDate-${idx}`]?.value || batch.startDate,
              endDate: e.target[`batchEndDate-${idx}`]?.value || batch.endDate,
              timing: e.target[`batchTiming-${idx}`]?.value || batch.timing,
            })),
            courseQuarters: editCourse.courseQuarters.map((quarter, idx) => ({
              ...quarter,
              fee: e.target[`quarterFee-${idx}`]?.value || quarter.fee,
            }))
          };
          handleSaveEdit(updatedCourse);
        }}
      >
        <div className="mb-4">
          <label className="block font-medium mb-2">Course Title</label>
          <input
            type="text"
            name="courseTitle"
            defaultValue={editCourse.courseTitle}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Course Description</label>
          <textarea
            name="courseDescription"
            defaultValue={editCourse.courseDescription}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>

        {/* Scrollable content for modules, batches, and quarters */}
        <div className="max-h-96 overflow-y-auto mb-4">
          {/* Modules Section */}
          <div>
            <h3 className="text-lg font-medium mb-2">Modules</h3>
            {editCourse.modules.map((module, idx) => (
              <div key={idx} className="mb-4">
                <label className="block font-medium mb-2">Module Title</label>
                <input
                  type="text"
                  name={`moduleTitle-${idx}`}
                  defaultValue={module.title}
                  className="border rounded w-full px-3 py-2"
                />
                <label className="block font-medium mb-2">Module Description</label>
                <textarea
                  name={`moduleDescription-${idx}`}
                  defaultValue={module.description}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
            ))}
          </div>

          {/* Batches Section */}
          <div>
            <h3 className="text-lg font-medium mb-2">Batches</h3>
            {editCourse.batches.map((batch, idx) => (
              <div key={idx} className="mb-4">
                <label className="block font-medium mb-2">Batch Start Date</label>
                <input
                  type="date"
                  name={`batchStartDate-${idx}`}
                  defaultValue={batch.startDate}
                  className="border rounded w-full px-3 py-2"
                />
                <label className="block font-medium mb-2">Batch End Date</label>
                <input
                  type="date"
                  name={`batchEndDate-${idx}`}
                  defaultValue={batch.endDate}
                  className="border rounded w-full px-3 py-2"
                />
                <label className="block font-medium mb-2">Batch Timing</label>
                <input
                  type="text"
                  name={`batchTiming-${idx}`}
                  defaultValue={batch.timing}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
            ))}
          </div>

          {/* Course Quarters Section */}
          <div>
            <h3 className="text-lg font-medium mb-2">Course Quarters</h3>
            {editCourse.courseQuarters.map((quarter, idx) => (
              <div key={idx} className="mb-4">
                <label className="block font-medium mb-2">Quarter Fee</label>
                <input
                  type="text"
                  name={`quarterFee-${idx}`}
                  defaultValue={quarter.fee}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save and Cancel buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => setEditCourse(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default AdminCourses;
