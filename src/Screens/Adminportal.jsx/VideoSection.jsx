import React from "react";
import Sidebar from '../../Components/Admincomponents/Sidebar'

const CertificationBatches = () => {
  const batches = [
    { title: "Certified Agentic and Robotic", batch: "Batch 66" },
    { title: "Certified Agentic and Robotic", batch: "Batch 67" },
    { title: "Certified Agentic and Robotic", batch: "Batch 68" },
    { title: "Certified Agentic and Robotic", batch: "Batch 69" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
     <Sidebar/>
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
       
      <div className="flex flex-wrap justify-center gap-4">
        {batches.map((batch, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-full px-6 py-4 text-center"
          >
            <p className="text-sm font-semibold text-gray-800">
              {batch.title}
            </p>
            <p className="text-xs text-gray-600">{batch.batch}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CertificationBatches;
