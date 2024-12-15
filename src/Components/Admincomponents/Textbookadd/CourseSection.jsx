import React from "react";
import AdminNav from "../../AdminNav";
const CourseSelection = ({ courses, onSelectCourse }) => {
  return (
    <div>
   
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Select a Course</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => onSelectCourse(course)}
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseSelection;
