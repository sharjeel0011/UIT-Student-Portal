// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { jsPDF } from "jspdf";

// const IDCard = () => {
//   const location = useLocation();
//   const student = location.state?.student;

//   // Generate the PDF when the component is mounted
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Add student details to PDF
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(14);
//     doc.text("Student ID Card", 20, 20);

//     doc.setFontSize(12);
//     doc.text(`Name: ${student.name}`, 20, 30);
//     doc.text(`Father's Name: ${student.fatherName}`, 20, 40);
//     doc.text(`Roll No: ${student.rollNo}`, 20, 50);
//     doc.text(`Batch: ${student.batch}`, 20, 60);
//     doc.text(`Course: ${student.course}`, 20, 70);
//     doc.text(`City: ${student.city}`, 20, 80);
//     doc.text(`Gender: ${student.gender}`, 20, 90);
//     doc.text(`Email: ${student.email}`, 20, 100);

//     // Add profile image
//     doc.addImage(student.profileImage, "JPEG", 20, 110, 40, 40); // Adjust size as needed

//     // Save the PDF
//     doc.save(`${student.name}_ID_Card.pdf`);
//   };

//   useEffect(() => {
//     if (!student) {
//       // Redirect or show an error if student data is not available
//     }
//   }, [student]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
//         <h1 className="text-2xl font-bold text-center mb-4">Student ID Card</h1>

//         {/* Display student details */}
//         <div className="text-center">
//           <img
//             src={student.profileImage}
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-blue-600 mx-auto"
//           />
//           <h2 className="text-xl font-semibold">{student.name}</h2>
//           <p>{student.course}</p>
//           <p className="mt-4">
//             <strong>Roll No:</strong> {student.rollNo}
//           </p>
//           <p className="mt-2">
//             <strong>Batch:</strong> {student.batch}
//           </p>

//           {/* Button to download PDF */}
//           <div className="mt-6 text-center">
//             <button
//               onClick={generatePDF}
//               className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
//             >
//               Download ID Card as PDF
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IDCard;





import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const IDCard = () => {
  const location = useLocation();
  const student = location.state?.student;

  // Generate the PDF when the component is mounted
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add student details to PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Student ID Card", 20, 20, { align: "center" });

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${student.name}`, 20, 40);
    doc.text(`Father's Name: ${student.fatherName}`, 20, 50);
    doc.text(`Roll No: ${student.rollNo}`, 20, 60);
    doc.text(`Batch: ${student.batch}`, 20, 70);
    doc.text(`Course: ${student.course}`, 20, 80);
    doc.text(`City: ${student.city}`, 20, 90);
    doc.text(`Gender: ${student.gender}`, 20, 100);
    doc.text(`Email: ${student.email}`, 20, 110);

    // Add profile image
    doc.addImage(student.profileImage, "JPEG", 20, 120, 40, 40, "ID Card Image");

    // Save the PDF
    doc.save(`${student.name}_ID_Card.pdf`);
  };

  useEffect(() => {
    if (!student) {
      // Redirect or show an error if student data is not available
    }
  }, [student]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-bold text-center mb-4">Student ID Card</h1>

        {/* Display student details */}
        <div className="text-center">
          <img
            src={student.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h2>
          <p className="text-gray-600">{student.course}</p>
          <p className="mt-4">
            <strong>Roll No:</strong> {student.rollNo}
          </p>
          <p className="mt-2">
            <strong>Batch:</strong> {student.batch}
          </p>

          {/* Button to download PDF */}
          <div className="mt-6 text-center">
            <button
              onClick={generatePDF}
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
            >
              Download ID Card as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;


