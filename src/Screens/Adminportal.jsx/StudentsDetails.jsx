
import React, { useState } from "react";
import { studentData } from "../../assets/Data"; // Adjust the import path as necessary

const StudentDetails = () => {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filterByStatus = (status) => {
    setSelectedStatus(status);
    setFilteredStudents(
      studentData.filter((student) => student.status === status)
    );
  };

  const handleSearch = () => {
    const student = studentData.find(
      (s) => s.cnic === searchQuery || s.rollNumber === searchQuery
    );
    setFilteredStudents(student ? [student] : []);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => filterByStatus("Eliminated")}
        >
          Eliminated Students
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => filterByStatus("Passout")}
        >
          Passout Students
        </button>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded"
          onClick={() => filterByStatus("Enrolled")}
        >
          Enrolled Students
        </button>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 mr-2 w-full"
          placeholder="Search by CNIC or Roll Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {filteredStudents.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Roll Number</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">CNIC</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.rollNumber}>
                <td className="border border-gray-300 p-2">{student.rollNumber}</td>
                <td className="border border-gray-300 p-2">{student.name}</td>
                <td className="border border-gray-300 p-2">{student.cnic}</td>
                <td className="border border-gray-300 p-2">{student.status}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-purple-500 text-white py-1 px-3 rounded"
                    
                    onClick={() => {
                        console.log(student); // Debug: check if the student is being passed correctly
                        setSelectedStudent(student);
                      }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}

      {selectedStudent && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Student Details</h2>
            <p><strong>Roll Number:</strong> {selectedStudent.rollNumber}</p>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Father Name:</strong> {selectedStudent.fatherName}</p>
            <p><strong>CNIC:</strong> {selectedStudent.cnic}</p>
            <p><strong>Address:</strong> {selectedStudent.address}</p>
            <p><strong>Phone:</strong> {selectedStudent.phone}</p>
            <p><strong>Qualification:</strong> {selectedStudent.qualification}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Current Course:</strong> {selectedStudent.currentCourse}</p>
            <p><strong>Batch:</strong> {selectedStudent.batch}</p>
            <p><strong>Start Date:</strong> {selectedStudent.startDate}</p>
            <p><strong>Timing:</strong> {selectedStudent.timing}</p>
            <p><strong>Instructor:</strong> {selectedStudent.instructor}</p>
            <p><strong>Status:</strong> {selectedStudent.status}</p>

            <h3 className="mt-4 text-lg font-semibold">Previous Courses</h3>
            <ul className="list-disc ml-6">
              {selectedStudent.previousCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Fee History</h3>
            <ul className="list-disc ml-6">
              {selectedStudent.feeHistory.map((history, index) => (
                <li key={index}>
                  {history.course}: {history.paid ? "Paid" : "Pending"}
                </li>
              ))}
            </ul>

            {selectedStudent.photo && (
              <img
                src={selectedStudent.photo}
                alt="Student Photo"
                className="mt-4 rounded-full w-24 h-24 mx-auto"
              />
            )}
            
            <p className="mt-4">
              <strong>ID Card:</strong>{" "}
              <a href={selectedStudent.idCardLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View ID Card
              </a>
            </p>

            <button
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
              onClick={() => setSelectedStudent(null)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
