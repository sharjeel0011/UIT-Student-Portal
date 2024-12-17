import React, { useState } from "react";
import { CourseNew } from "../../assets/Data";

const TextbookManagement = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  // Fields for new textbook
  const [textbookTitle, setTextbookTitle] = useState("");
  const [textbookAuthor, setTextbookAuthor] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [link, setLink] = useState("");

  const handleCourseChange = (event) => {
    const selected = CourseNew.find(
      (course) => course.courseTitle === event.target.value
    );
    setSelectedCourse(selected);
    setSelectedBatch(null);
    setSelectedQuarter(null);
    setSelectedModule(null);
  };

  const handleBatchChange = (event) => {
    const selectedBatch = selectedCourse.batches.find(
      (batch) => batch.batchId === event.target.value
    );
    setSelectedBatch(selectedBatch);
    setSelectedQuarter(null);
    setSelectedModule(null);
  };

  const handleQuarterChange = (event) => {
    const selectedQuarter = selectedCourse.courseQuarters.find(
      (quarter) => quarter.quarterId === event.target.value
    );
    setSelectedQuarter(selectedQuarter);
    setSelectedModule(null);
  };

  const handleModuleChange = (event) => {
    const selectedModule = selectedCourse.modules.find(
      (module) => module.title === event.target.value
    );
    setSelectedModule(selectedModule);
  };

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleAddTextbook = () => {
    if (selectedModule && pdfFile) {
      const newTextbook = {
        id: Date.now(),
        title: textbookTitle,
        author: textbookAuthor,
        pdfFileName: pdfFile.name,
        link,
      };

      selectedModule.textbooks = selectedModule.textbooks || [];
      selectedModule.textbooks.push(newTextbook);

      // Clear the form
      setTextbookTitle("");
      setTextbookAuthor("");
      setPdfFile(null);
      setLink("");

      alert("Textbook added successfully!");
    } else {
      alert("Please select a module and upload a PDF file.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Textbooks</h1>

      {/* Course Selection */}
      <div className="mb-4">
        <label htmlFor="course" className="block text-xl mb-2">Select Course</label>
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

      {/* Other Dropdowns */}
      {selectedCourse && (
        <div className="mb-4">
          <label htmlFor="batch" className="block text-xl mb-2">Select Batch</label>
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

      {selectedBatch && (
        <div className="mb-4">
          <label htmlFor="quarter" className="block text-xl mb-2">Select Quarter</label>
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

      {selectedQuarter && (
        <div className="mb-4">
          <label htmlFor="module" className="block text-xl mb-2">Select Module</label>
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

      {/* Add Textbook Form */}
      {selectedModule && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Add Textbook</h2>

          <div className="mb-4">
            <label htmlFor="textbookTitle" className="block text-xl mb-2">Textbook Title</label>
            <input
              id="textbookTitle"
              type="text"
              value={textbookTitle}
              onChange={(e) => setTextbookTitle(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="textbookAuthor" className="block text-xl mb-2">Author</label>
            <input
              id="textbookAuthor"
              type="text"
              value={textbookAuthor}
              onChange={(e) => setTextbookAuthor(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pdfUpload" className="block text-xl mb-2">Upload PDF</label>
            <input
              id="pdfUpload"
              type="file"
              accept="application/pdf"
              onChange={handlePdfUpload}
              className="w-full p-2 border rounded-lg"
            />
          </div>


          <button
            onClick={handleAddTextbook}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Textbook
          </button>
        </div>
      )}

     
    </div>
  );
};

export default TextbookManagement;










