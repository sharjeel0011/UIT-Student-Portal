
import React from "react";
import { useParams } from "react-router-dom";
import ProgramStructure from "../../Components/HomePage/ProgramStructure";
import {Link} from 'react-router-dom'
const CourseDetail = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  // If course is not found
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-bold">Course not found!</p>
      </div>
    );
  }

  // Console log the course and its details for debugging
  // console.log("Course Data:", course);
  // console.log("Quarter Data:", course.quarters);
  // console.log("Module Data:", course.modules);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Hero Section */}
      <div className="text-center bg-blue-900 text-white py-10 shadow-lg">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-sm mt-2">{course.description}</p>
        <Link to='/admissionform'>
        <button className="px-6 mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Apply Now
        </button>
        </Link>

      </div>

      <ProgramStructure quarters={course.quarters} />
      {/* Program Steps */}
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Program Structure</h2>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 w-1 bg-blue-900 top-0 h-full transform -translate-x-1/2"></div>

          {/* Modules */}
          {course.modules.map((module, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between mb-12 relative ${index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 top-0 w-6 h-6 bg-blue-900 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Module Content */}
              <div
                className={`bg-white shadow-lg p-6 rounded-lg w-5/6 md:w-2/5 ${index % 2 === 0 ? "order-1" : "order-2"
                  }`}
              >
                <h3 className="text-lg font-semibold text-blue-900">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-700">Technical Tasks:</h4>
                  <ul className="list-disc pl-4 text-sm text-gray-700">
                    {module.technicalTasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-700">Innovation Tasks:</h4>
                  <ul className="list-disc pl-4 text-sm text-gray-700">
                    {module.innovationTasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;


