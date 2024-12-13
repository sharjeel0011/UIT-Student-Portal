// import React, { useState } from "react";

// const TextbookManagement = ({ batch }) => {
//   const [textbooks, setTextbooks] = useState(batch.textbooks);

//   const addTextbook = () => {
//     setTextbooks([...textbooks, { id: Date.now(), title: "", author: "" }]);
//   };

//   const updateTextbook = (index, field, value) => {
//     const updated = [...textbooks];
//     updated[index][field] = value;
//     setTextbooks(updated);
//   };

//   const removeTextbook = (index) => {
//     setTextbooks(textbooks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         Manage Textbooks for Batch {batch.batchId}
//       </h1>
//       {textbooks.map((textbook, index) => (
//         <div key={textbook.id} className="mb-6 p-4 border rounded-lg">
//           <input
//             type="text"
//             placeholder="Title"
//             value={textbook.title}
//             onChange={(e) => updateTextbook(index, "title", e.target.value)}
//             className="w-full mb-4 p-2 border rounded-lg"
//           />
//           <input
//             type="text"
//             placeholder="Author"
//             value={textbook.author}
//             onChange={(e) => updateTextbook(index, "author", e.target.value)}
//             className="w-full mb-4 p-2 border rounded-lg"
//           />
//           <button
//             type="button"
//             onClick={() => removeTextbook(index)}
//             className="text-red-500 underline"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={addTextbook}
//         className="mt-2 text-blue-500 underline"
//       >
//         + Add Textbook
//       </button>
//     </div>
//   );
// };

// export default TextbookManagement;

















// import React, { useState } from "react";

// const TextbookManagement = ({ batch, uploadPDF }) => {
//   const [textbooks, setTextbooks] = useState(batch.textbooks);

//   // Add a new textbook entry
//   const addTextbook = () => {
//     setTextbooks([
//       ...textbooks,
//       { id: Date.now(), title: "", author: "", fileUrl: "" },
//     ]);
//   };

//   // Update textbook data
//   const updateTextbook = (index, field, value) => {
//     const updated = [...textbooks];
//     updated[index][field] = value;
//     setTextbooks(updated);
//   };

//   // Handle PDF file upload
//   const handlePDFUpload = async (index, file) => {
//     if (!file) return;

//     try {
//       const fileUrl = await uploadPDF(file); // Upload the PDF and get its URL
//       updateTextbook(index, "fileUrl", fileUrl);
//       alert("PDF uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading PDF:", error);
//       alert("Failed to upload PDF. Please try again.");
//     }
//   };

//   // Remove a textbook
//   const removeTextbook = (index) => {
//     setTextbooks(textbooks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         Manage Textbooks for Batch {batch.batchId}
//       </h1>
//       {textbooks.map((textbook, index) => (
//         <div key={textbook.id} className="mb-6 p-4 border rounded-lg">
//           {/* Title */}
//           <input
//             type="text"
//             placeholder="Title"
//             value={textbook.title}
//             onChange={(e) => updateTextbook(index, "title", e.target.value)}
//             className="w-full mb-4 p-2 border rounded-lg"
//           />

//           {/* Author */}
//           <input
//             type="text"
//             placeholder="Author"
//             value={textbook.author}
//             onChange={(e) => updateTextbook(index, "author", e.target.value)}
//             className="w-full mb-4 p-2 border rounded-lg"
//           />

//           {/* PDF Upload */}
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">Upload PDF:</label>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={(e) => handlePDFUpload(index, e.target.files[0])}
//               className="block w-full p-2 border rounded-lg"
//             />
//             {textbook.fileUrl && (
//               <a
//                 href={textbook.fileUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 underline mt-2 inline-block"
//               >
//                 View/Download PDF
//               </a>
//             )}
//           </div>

//           {/* Remove Button */}
//           <button
//             type="button"
//             onClick={() => removeTextbook(index)}
//             className="text-red-500 underline"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       {/* Add New Textbook */}
//       <button
//         type="button"
//         onClick={addTextbook}
//         className="mt-2 text-blue-500 underline"
//       >
//         + Add Textbook
//       </button>
//     </div>
//   );
// };

// export default TextbookManagement;
















import React, { useState } from "react";
import AdminNav from "../../AdminNav";

const TextbookManagement = ({ batch }) => {
  const [textbooks, setTextbooks] = useState(batch.textbooks);

  const addTextbook = () => {
    setTextbooks([...textbooks, { id: Date.now(), title: "", author: "", file: null }]);
  };

  const updateTextbook = (index, field, value) => {
    const updated = [...textbooks];
    updated[index][field] = value;
    setTextbooks(updated);
  };

  const updateFile = (index, file) => {
    const updated = [...textbooks];
    updated[index].file = file;
    setTextbooks(updated);
  };

  const removeTextbook = (index) => {
    setTextbooks(textbooks.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Simulate submission
    console.log("Submitted Textbooks:", textbooks);
    alert("Textbooks saved successfully!");
  };

  return (
    <div>
      <AdminNav/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Manage Textbooks for Batch {batch.batchId}
      </h1>
      {textbooks.map((textbook, index) => (
        <div key={textbook.id} className="mb-6 p-4 border rounded-lg">
          <input
            type="text"
            placeholder="Title"
            value={textbook.title}
            onChange={(e) => updateTextbook(index, "title", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Author"
            value={textbook.author}
            onChange={(e) => updateTextbook(index, "author", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => updateFile(index, e.target.files[0])}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          {textbook.file && (
            <p className="text-sm text-gray-600">Selected File: {textbook.file.name}</p>
          )}
          <button
            type="button"
            onClick={() => removeTextbook(index)}
            className="text-red-500 underline"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addTextbook}
        className="mt-2 text-blue-500 underline"
      >
        + Add Textbook
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Textbooks
      </button>
    </div>
    </div>
  );
};

export default TextbookManagement;
