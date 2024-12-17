
import React, { useState, useEffect } from "react";
import QuarterCourses from "../../Components/Admincomponents/AddQuarters";
import CoursesAction from '../../Screens/Adminportal.jsx/CoursesActions'
const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);
  const [modules, setModules] = useState([
    { title: "", description: "", quarterId: "" },
  ]);
  const [batches, setBatches] = useState([
    { batchId: "", startDate: "", endDate: "", timing: "", instructor: "" },
  ]);
  const [quarters, setQuarters] = useState([]);

  // Fetch quarters from the backend
  useEffect(() => {
    const fetchQuarters = async () => {
      try {
        const response = await fetch("API_ENDPOINT_FOR_QUARTERS"); // Replace with your API endpoint
        const data = await response.json();
        setQuarters(data);
      } catch (error) {
        console.error("Error fetching quarters:", error);
      }
    };
    fetchQuarters();
  }, []);

  const addModule = () =>
    setModules([...modules, { title: "", description: "", quarterId: "" }]);

  const removeModule = (index) =>
    setModules(modules.filter((_, i) => i !== index));

  const addBatch = () =>
    setBatches([
      ...batches,
      { batchId: "", startDate: "", endDate: "", timing: "", instructor: "" },
    ]);

  const removeBatch = (index) =>
    setBatches(batches.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = { title, description, steps, modules, batches };
    console.log("Course Added:", courseData);
    alert("Course Added Successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <QuarterCourses />
        <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
        <form onSubmit={handleSubmit}>
          {/* Course Title and Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Course Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter course title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Course Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter course description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Modules */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Modules</label>
            {modules.map((module, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[index].title = e.target.value;
                    setModules(newModules);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  placeholder="Module Title"
                  required
                />
                <textarea
                  value={module.description}
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[index].description = e.target.value;
                    setModules(newModules);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  placeholder="Module Description"
                  rows="3"
                  required
                ></textarea>
                {/* Dropdown for Quarter Selection */}
                <select
                  value={module.quarterId || ""}
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[index].quarterId = e.target.value;
                    setModules(newModules);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  required
                >
                  <option value="" disabled>
                    Select Quarter
                  </option>
                  {quarters.map((quarter) => (
                    <option key={quarter.id} value={quarter.id}>
                      {quarter.title}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeModule(index)}
                  className="text-red-500 ml-4"
                >
                  Remove Module
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addModule}
              className="mt-2 text-blue-500 underline"
            >
              + Add Module
            </button>
          </div>

          {/* Batches */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Batches</label>
            {batches.map((batch, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <input
                  type="text"
                  value={batch.batchId}
                  onChange={(e) => {
                    const newBatches = [...batches];
                    newBatches[index].batchId = e.target.value;
                    setBatches(newBatches);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  placeholder="Batch Name"
                  required
                />
                <input
                  type="date"
                  value={batch.startDate}
                  onChange={(e) => {
                    const newBatches = [...batches];
                    newBatches[index].startDate = e.target.value;
                    setBatches(newBatches);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  required
                />
                <input
                  type="date"
                  value={batch.endDate}
                  onChange={(e) => {
                    const newBatches = [...batches];
                    newBatches[index].endDate = e.target.value;
                    setBatches(newBatches);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  required
                />
                <input
                  type="text"
                  value={batch.timing}
                  onChange={(e) => {
                    const newBatches = [...batches];
                    newBatches[index].timing = e.target.value;
                    setBatches(newBatches);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  placeholder="Timing"
                  required
                />
                <input
                  type="text"
                  value={batch.instructor}
                  onChange={(e) => {
                    const newBatches = [...batches];
                    newBatches[index].instructor = e.target.value;
                    setBatches(newBatches);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  placeholder="Instructor"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeBatch(index)}
                  className="text-red-500"
                >
                  Remove Batch
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addBatch}
              className="mt-2 text-blue-500 underline"
            >
              + Add Batch
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Course
          </button>
        </form>
        <div className="mt-28">
      <CoursesAction/>
      </div>
      </div>

    </div>
  );
};

export default AddCourse;
