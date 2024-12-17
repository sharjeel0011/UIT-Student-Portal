
import React, { useState } from "react";

const QuarterCourses = ({ onSave }) => {
  const [quarters, setQuarters] = useState([
    { quarterId: 1, title: "", fee: "" },
  ]);

  // Add a new quarter
  const addQuarter = () => {
    const newQuarterId = quarters.length + 1;
    setQuarters([
      ...quarters,
      { quarterId: newQuarterId, title: "", fee: "" },
    ]);
  };

  // Remove a quarter
  const removeQuarter = (index) => {
    const updatedQuarters = quarters.filter((_, i) => i !== index);
    setQuarters(updatedQuarters);
  };

  // Handle title change for a specific quarter
  const handleTitleChange = (index, title) => {
    const updatedQuarters = [...quarters];
    updatedQuarters[index].title = title;
    setQuarters(updatedQuarters);
  };

  // Handle fee change for a specific quarter
  const handleFeeChange = (index, fee) => {
    const updatedQuarters = [...quarters];
    updatedQuarters[index].fee = fee;
    setQuarters(updatedQuarters);
  };

  // Handle saving all quarters to database (mock for now)
  const handleSave = () => {
    const courseQuarters = quarters.map((quarter) => ({
      quarterId: quarter.quarterId,
      title: quarter.title,
      fee: quarter.fee,
    }));

    console.log("Final Data to Save:", JSON.stringify({ courseQuarters }, null, 2));

    if (onSave) {
      onSave(courseQuarters); // Pass data to parent component if needed
    }
    alert("Data prepared for saving! Check console for JSON.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Manage Quarters</h1>
      {quarters.map((quarter, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={quarter.title}
            onChange={(e) => handleTitleChange(index, e.target.value)}
            className="w-full p-2 border rounded"
            placeholder={`Quarter ${quarter.quarterId} Title`}
            required
          />
          <input
            type="text"
            value={quarter.fee}
            onChange={(e) => handleFeeChange(index, e.target.value)}
            className="w-32 p-2 ml-2 border rounded"
            placeholder="Fee"
            required
          />
          <button
            type="button"
            onClick={() => removeQuarter(index)}
            className="ml-2 text-red-500"
          >
            &times;
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addQuarter}
        className="mt-2 text-blue-500 underline"
      >
        + Add Quarter
      </button>
      <button
        type="button"
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Save All Quarters
      </button>
    </div>
  );
};

export default QuarterCourses;
