// import React, { useState } from "react";
// import { courses } from "../../assets/Data";

// const AdminCourses = () => {
//   const [courseList, setCourseList] = useState(courses);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Handle course deletion
//   const handleDeleteCourse = (id) => {
//     const updatedCourses = courseList.filter((course) => course.id !== id);
//     setCourseList(updatedCourses);
//     alert(`Course with ID "${id}" has been deleted.`);
//   };

//   // Handle viewing course details
//   const handleViewDetails = (course) => {
//     setSelectedCourse(course);
//   };

//   return (
//     <div className="admin-courses-container">
//       <h1 className="text-2xl font-bold mb-4">Admin Courses Management</h1>

//       {/* Course List */}
//       <div className="course-list">
//         {courseList.map((course) => (
//           <div
//             key={course.id}
//             className="course-card border p-4 rounded mb-4 shadow-lg"
//           >
//             <h2 className="text-xl font-semibold">{course.title}</h2>
//             <p className="text-gray-600">{course.description}</p>
//             <p className="text-sm text-gray-500">
//               Category: {course.metadata.category}
//             </p>
//             <div className="mt-4 flex gap-4">
//               {/* View Details Button */}
//               <button
//                 onClick={() => handleViewDetails(course)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 View Details
//               </button>

//               {/* Delete Button */}
//               <button
//                 onClick={() => handleDeleteCourse(course.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete Course
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Course Details Modal */}
//       {selectedCourse && (
//         <div className="course-details-modal bg-gray-100 border rounded p-4 shadow-lg fixed top-20 left-1/4 w-1/2">
//           <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
//           <p>{selectedCourse.description}</p>
//           <h3 className="text-xl font-semibold mt-4">Metadata</h3>
//           <p>Category: {selectedCourse.metadata.category}</p>
//           <p>Level: {selectedCourse.metadata.level}</p>
//           <p>Tags: {selectedCourse.metadata.tags.join(", ")}</p>

//           <h3 className="text-xl font-semibold mt-4">Steps</h3>
//           <ul className="list-disc pl-6">
//             {selectedCourse.steps.map((step, index) => (
//               <li key={index}>{step}</li>
//             ))}
//           </ul>

//           <button
//             onClick={() => setSelectedCourse(null)}
//             className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCourses;
import React, { useState } from "react";

export const coursesData = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is a cutting-edge field that leverages algorithms to simulate human intelligence. This course covers modern AI techniques and applications.",
    metadata: {
      category: "Technology",
      level: "Intermediate",
      tags: ["AI", "ML", "Technology"],
    },
  },
  {
    id: "cloud",
    title: "Cloud Learning",
    description:
      "Cloud Learning covers cloud computing, storage solutions, and deployment strategies for modern applications.",
    metadata: {
      category: "Technology",
      level: "Beginner",
      tags: ["Cloud", "Computing", "Technology"],
    },
  },
];

const AdminCourses = () => {
  const [courses, setCourses] = useState(coursesData); // Manage courses state
  const [deleteCourseId, setDeleteCourseId] = useState(null); // Track the course to delete
  const [editCourse, setEditCourse] = useState(null); // Track the course to edit

  // Open the delete confirmation modal
  const openDeleteModal = (id) => {
    setDeleteCourseId(id);
  };

  // Confirm and delete the course
  const handleConfirmDelete = () => {
    const updatedCourses = courses.filter((course) => course.id !== deleteCourseId);
    setCourses(updatedCourses);
    setDeleteCourseId(null); // Close the modal
  };

  // Cancel the delete operation
  const handleCancelDelete = () => {
    setDeleteCourseId(null);
  };

  // Open the edit modal with the selected course
  const openEditModal = (course) => {
    setEditCourse(course);
  };

  // Handle saving the updated course details
  const handleSaveEdit = (updatedCourse) => {
    const updatedCourses = courses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setCourses(updatedCourses);
    setEditCourse(null); // Close the modal
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin: Manage Courses</h1>

      {/* Render the list of courses */}
      <div className="grid gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-sm text-gray-500">
                Category: {course.metadata.category}
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
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedCourse = {
                  ...editCourse,
                  title: e.target.title.value,
                  description: e.target.description.value,
                  metadata: {
                    ...editCourse.metadata,
                    category: e.target.category.value,
                  },
                };
                handleSaveEdit(updatedCourse);
              }}
            >
              <div className="mb-4">
                <label className="block font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editCourse.title}
                  className="border rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  defaultValue={editCourse.description}
                  className="border rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={editCourse.metadata.category}
                  className="border rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditCourse(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
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
