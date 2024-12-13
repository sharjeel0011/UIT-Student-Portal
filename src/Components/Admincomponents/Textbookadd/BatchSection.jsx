import React from "react";

const BatchSelection = ({ course, onSelectBatch }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Select a Batch for {course.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {course.batches.map((batch) => (
          <div
            key={batch.batchId}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => onSelectBatch(batch)}
          >
            <h2 className="text-lg font-semibold">Batch ID: {batch.batchId}</h2>
            <p className="text-gray-600">
              {batch.startDate} - {batch.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchSelection;
