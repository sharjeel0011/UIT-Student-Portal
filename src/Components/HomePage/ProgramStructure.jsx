
import React from "react";

const ProgramStructure = ({ quarters }) => {
  if (!quarters || quarters.length === 0) {
    return <p className="text-center text-gray-500">No quarters available.</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Program Quarters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quarters.map((quarter, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center border border-blue-200"
          >
            <h3 className="text-lg font-semibold text-blue-900">
              Quarter {quarter.quarter}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{quarter.title}</p>
            <p className="text-sm text-gray-500 mt-1 font-bold">{quarter.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramStructure;
