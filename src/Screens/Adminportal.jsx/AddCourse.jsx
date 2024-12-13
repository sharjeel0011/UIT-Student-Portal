// import React, { useState } from "react";
// import Sidebar from "../../Components/Admincomponents/Sidebar";

// const AddCourse = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [steps, setSteps] = useState([""]);
//   const [modules, setModules] = useState([
//     { title: "", description: "", technicalTasks: [""], innovationTasks: [""] },
//   ]);
//   const [quarters, setQuarters] = useState([
//     { quarter: 1, title: "", fee: "" },
//     //add api here
//   ]);

//   // Add or Remove Functions
//   const addStep = () => setSteps([...steps, ""]);
//   const removeStep = (index) => setSteps(steps.filter((_, i) => i !== index));

//   const addModule = () =>
//     setModules([
//       ...modules,
//       { title: "", description: "", technicalTasks: [""], innovationTasks: [""] },
//     ]);
//   const removeModule = (index) => setModules(modules.filter((_, i) => i !== index));

//   const addQuarter = () => setQuarters([...quarters, { quarter: quarters.length + 1, title: "", fee: "" }]);
//   const removeQuarter = (index) => setQuarters(quarters.filter((_, i) => i !== index));

//   // Submit Handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const courseData = { title, description, steps, modules, quarters };
//     console.log("Course Added:", courseData);
//     alert("Course Added Successfully!");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//     {/* Sidebar */}
//     <Sidebar className="w-1/4 min-h-screen bg-white shadow-md" />
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Course Title and Description */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Course Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="Enter course title"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Course Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="Enter course description"
//             rows="4"
//             required
//           ></textarea>
//         </div>

//         {/* Steps */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Steps to Complete</label>
//           {steps.map((step, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="text"
//                 value={step}
//                 onChange={(e) => {
//                   const newSteps = [...steps];
//                   newSteps[index] = e.target.value;
//                   setSteps(newSteps);
//                 }}
//                 className="w-full p-2 border rounded"
//                 placeholder={`Step ${index + 1}`}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => removeStep(index)}
//                 className="ml-2 text-red-500"
//               >
//                 &times;
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addStep}
//             className="mt-2 text-blue-500 underline"
//           >
//             + Add Step
//           </button>
//         </div>

//         {/* Modules */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Modules</label>
//           {modules.map((module, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <input
//                 type="text"
//                 value={module.title}
//                 onChange={(e) => {
//                   const newModules = [...modules];
//                   newModules[index].title = e.target.value;
//                   setModules(newModules);
//                 }}
//                 className="w-full p-2 mb-2 border rounded"
//                 placeholder="Module Title"
//                 required
//               />
//               <textarea
//                 value={module.description}
//                 onChange={(e) => {
//                   const newModules = [...modules];
//                   newModules[index].description = e.target.value;
//                   setModules(newModules);
//                 }}
//                 className="w-full p-2 mb-2 border rounded"
//                 placeholder="Module Description"
//                 rows="3"
//                 required
//               ></textarea>
//               {/* Technical Tasks */}
//               <label className="block text-sm font-medium mb-2">Technical Tasks</label>
//               {module.technicalTasks.map((task, taskIndex) => (
//                 <input
//                   key={taskIndex}
//                   type="text"
//                   value={task}
//                   onChange={(e) => {
//                     const newModules = [...modules];
//                     newModules[index].technicalTasks[taskIndex] = e.target.value;
//                     setModules(newModules);
//                   }}
//                   className="w-full p-2 mb-2 border rounded"
//                   placeholder={`Task ${taskIndex + 1}`}
//                 />
//               ))}
//               {/* Add/Remove Technical Tasks */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   const newModules = [...modules];
//                   newModules[index].technicalTasks.push("");
//                   setModules(newModules);
//                 }}
//                 className="text-blue-500 underline"
//               >
//                 + Add Technical Task
//               </button>
//               <button
//                 type="button"
//                 onClick={() => removeModule(index)}
//                 className="text-red-500 ml-4"
//               >
//                 Remove Module
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addModule}
//             className="mt-2 text-blue-500 underline"
//           >
//             + Add Module
//           </button>
//         </div>

//         {/* Quarters */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Quarters</label>
//           {quarters.map((quarter, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <input
//                 type="text"
//                 value={quarter.title}
//                 onChange={(e) => {
//                   const newQuarters = [...quarters];
//                   newQuarters[index].title = e.target.value;
//                   setQuarters(newQuarters);
//                 }}
//                 className="w-full p-2 border rounded"
//                 placeholder={`Quarter ${quarter.quarter} Title`}
//                 required
//               />
//               <input
//                 type="text"
//                 value={quarter.fee}
//                 onChange={(e) => {
//                   const newQuarters = [...quarters];
//                   newQuarters[index].fee = e.target.value;
//                   setQuarters(newQuarters);
//                 }}
//                 className="w-32 p-2 ml-2 border rounded"
//                 placeholder="Fee"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => removeQuarter(index)}
//                 className="ml-2 text-red-500"
//               >
//                 &times;
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addQuarter}
//             className="mt-2 text-blue-500 underline"
//           >
//             + Add Quarter
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Add Course
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default AddCourse;


















import React, { useState } from "react";
import Sidebar from "../../Components/Admincomponents/Sidebar";
import AdminNav from "../../Components/AdminNav";

const AddCourse = () => {
    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);
  const [modules, setModules] = useState([
    { title: "", description: "", technicalTasks: [""], innovationTasks: [""] },
  ]);
  const [batches, setBatches] = useState([
    { batchId: "", startDate: "", endDate: "", timing: "", instructor: "" },
  ]);
  
  const [quarters, setQuarters] = useState([
    { quarter: 1, title: "", fee: "" },
    //add api here
  ]);

  // Add or Remove Functions
  const addStep = () => setSteps([...steps, ""]);
  const removeStep = (index) => setSteps(steps.filter((_, i) => i !== index));

  const addModule = () =>
    setModules([
      ...modules,
      { title: "", description: "", technicalTasks: [""], innovationTasks: [""] },
    ]);
  const removeModule = (index) => setModules(modules.filter((_, i) => i !== index));

  const addQuarter = () => setQuarters([...quarters, { quarter: quarters.length + 1, title: "", fee: "" }]);
  const removeQuarter = (index) => setQuarters(quarters.filter((_, i) => i !== index));

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = { title, description, steps, modules, quarters, batches };
    console.log("Course Added:", courseData);
    alert("Course Added Successfully!");
  };
  

  const addBatch = () =>
    setBatches([
      ...batches,
      { batchId: "", startDate: "", endDate: "", timing: "", instructor: "" },
    ]);
  
  const removeBatch = (index) =>
    setBatches(batches.filter((_, i) => i !== index));
  
  return (
 
    <div className="flex min-h-screen bg-gray-100">
      
    {/* Sidebar */}
    <Sidebar className=" min-h-screen bg-white shadow-md" />
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
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
          <label className="block text-sm font-medium mb-2">Course Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter course description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Steps to Complete</label>
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={step}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = e.target.value;
                  setSteps(newSteps);
                }}
                className="w-full p-2 border rounded"
                placeholder={`Step ${index + 1}`}
                required
              />
              <button
                type="button"
                onClick={() => removeStep(index)}
                className="ml-2 text-red-500"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className="mt-2 text-blue-500 underline"
          >
            + Add Step
          </button>
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
              {/* Technical Tasks */}
              <label className="block text-sm font-medium mb-2">Technical Tasks</label>
              {module.technicalTasks.map((task, taskIndex) => (
                <input
                  key={taskIndex}
                  type="text"
                  value={task}
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[index].technicalTasks[taskIndex] = e.target.value;
                    setModules(newModules);
                  }}
                  className="w-full p-2 mb-2 border rounded"
                  placeholder={`Task ${taskIndex + 1}`}
                />
              ))}
              {/* Add/Remove Technical Tasks */}
              <button
                type="button"
                onClick={() => {
                  const newModules = [...modules];
                  newModules[index].technicalTasks.push("");
                  setModules(newModules);
                }}
                className="text-blue-500 underline"
              >
                + Add Technical Task
              </button>
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
        placeholder="Batch ID"
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
        placeholder="Start Date"
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
        placeholder="End Date"
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

        {/* Quarters */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Quarters</label>
          {quarters.map((quarter, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={quarter.title}
                onChange={(e) => {
                  const newQuarters = [...quarters];
                  newQuarters[index].title = e.target.value;
                  setQuarters(newQuarters);
                }}
                className="w-full p-2 border rounded"
                placeholder={`Quarter ${quarter.quarter} Title`}
                required
              />
              <input
                type="text"
                value={quarter.fee}
                onChange={(e) => {
                  const newQuarters = [...quarters];
                  newQuarters[index].fee = e.target.value;
                  setQuarters(newQuarters);
                }}
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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddCourse;
