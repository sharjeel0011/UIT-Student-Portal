


import React, { useState } from "react";
import { studentData } from "../../assets/Data"; // Import the student data

const CourseDashboard = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null); // State for the selected student
  const [showEliminateModal, setShowEliminateModal] = useState(false); // Eliminate modal
  const [showPassOutModal, setShowPassOutModal] = useState(false); // Pass Out modal
  const [eliminationReason, setEliminationReason] = useState(""); // Reason for elimination
  const [students, setStudents] = useState(studentData); // State to manage students
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student); // Set the selected student for the modal
  };

  const handleCloseModal = () => {
    setSelectedStudent(null); // Close the student details modal
  };

  const handleDownloadIDCard = (idCardLink) => {
    const link = document.createElement("a");
    link.href = idCardLink;
    link.download = "ID_Card.jpg"; // Download file name
    link.click();
  };

  const handleRegenerateVoucher = (student) => {
    console.log(`Regenerated voucher for ${student.name}`);
    // Logic for regenerating voucher
  };

  const handleEliminateStudent = () => {
    if (selectedStudent) {
      const updatedStudents = students.map((student) =>
        student.rollNumber === selectedStudent.rollNumber
          ? { ...student, status: "Eliminated", eliminationReason }
          : student
      );
      setStudents(updatedStudents);
      setShowEliminateModal(false);
      setSelectedStudent(null);
      setEliminationReason("");
    }
  };

  const handleSetPassOutStatus = () => {
    if (selectedStudent) {
      const updatedStudents = students.map((student) =>
        student.rollNumber === selectedStudent.rollNumber
          ? { ...student, status: "Pass Out" }
          : student
      );
      setStudents(updatedStudents);
      setShowPassOutModal(false);
      setSelectedStudent(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Course Dashboard</h1>

      {!selectedCourse ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl hover:bg-blue-50 cursor-pointer transition"
                onClick={() => handleCourseClick(course)}
              >
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <p className="text-gray-800">Instructor: {course.batches[0]?.instructor || "N/A"}</p>
                <p className="text-gray-800">Batches: {course.batches.length}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            className="mb-4 text-blue-600 hover:underline"
            onClick={() => setSelectedCourse(null)}
          >
            Back to Courses
          </button>
          <h2 className="text-2xl font-semibold mb-4">{selectedCourse.title}</h2>
          <p className="text-gray-700 mb-4">{selectedCourse.description}</p>

          <h3 className="text-lg font-semibold mb-2">Batches</h3>
          <div className="space-y-4">
            {selectedCourse.batches.map((batch) => (
              <div
                key={batch.batchId}
                className="bg-white shadow-lg rounded-lg p-5"
              >
                <p className="font-bold text-lg mb-2">Batch ID: {batch.batchId}</p>
                <p>Instructor: {batch.instructor}</p>
                <p>Start Date: {batch.startDate}</p>
                <p>End Date: {batch.endDate}</p>
                <p>Timing: {batch.timing}</p>

                <div className="mt-4">
                  <h4 className="font-semibold mb-3">Students:</h4>
                  {students?.length ? (
                    <table className="min-w-full bg-white border rounded-md">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b">Name</th>
                          <th className="py-2 px-4 border-b">Roll Number</th>
                          <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{student.name}</td>
                            <td className="py-2 px-4 border-b">{student.rollNumber}</td>
                            <td className="py-2 px-4 border-b">
                              <div className="relative">
                                <button
                                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                  onClick={() => setDropdownVisible((prev) => (prev === index ? null : index))}
                                >
                                  Action
                                </button>
                                {dropdownVisible === index && (
                                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-10 w-48">
                                    <button
                                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      onClick={() => handleRegenerateVoucher(student)}
                                    >
                                      Regenerate Voucher
                                    </button>
                                    <button
                                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      onClick={() => handleStudentClick(student)}
                                    >
                                      View Details
                                    </button>
                                    <button
                                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      onClick={() => handleDownloadIDCard(student.idCardLink)}
                                    >
                                      Download ID Card
                                    </button>
                                    <button
                                      className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                                      onClick={() => {
                                        setSelectedStudent(student);
                                        setShowEliminateModal(true);
                                      }}
                                    >
                                      Eliminate Student
                                    </button>
                                    <button
                                      className="block w-full text-left px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
                                      onClick={() => {
                                        setSelectedStudent(student);
                                        setShowPassOutModal(true);
                                      }}
                                    >
                                      Set Pass Out Status
                                    </button>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-gray-500">No students enrolled in this batch.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for student details */}
      {selectedStudent && !showEliminateModal && !showPassOutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Roll Number:</strong> {selectedStudent.rollNumber}</p>
            <p><strong>Father's Name:</strong> {selectedStudent.fatherName}</p>
            <p><strong>CNIC:</strong> {selectedStudent.cnic}</p>
            <p><strong>City:</strong> {selectedStudent.city}</p>
            <p><strong>Address:</strong> {selectedStudent.address}</p>
            <p><strong>Gender:</strong> {selectedStudent.gender}</p>
            <p><strong>DOB:</strong> {selectedStudent.dob}</p>
            <p><strong>Qualification:</strong> {selectedStudent.qualification}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Eliminate Modal */}
      {showEliminateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Eliminate Student</h2>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <textarea
              className="w-full border rounded p-2 mb-4"
              placeholder="Enter reason for elimination..."
              value={eliminationReason}
              onChange={(e) => setEliminationReason(e.target.value)}
            ></textarea>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mr-2"
              onClick={handleEliminateStudent}
            >
              Confirm Elimination
            </button>
            <button
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              onClick={() => setShowEliminateModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Pass Out Modal */}
      {showPassOutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Set Pass Out Status</h2>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p>Are you sure you want to mark this student as Pass Out?</p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
              onClick={handleSetPassOutStatus}
            >
              Confirm Pass Out
            </button>
            <button
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              onClick={() => setShowPassOutModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default CourseDashboard;