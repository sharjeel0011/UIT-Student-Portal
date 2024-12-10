import React from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

const OnlineLectures = () => {
  const lectures = [
    {
      id: 1,
      title: "Certified Agentic and Robotic AI Engineer",
      description: "Getting You Ready for the AI Industrial Revolution",
      link: "/PaidonlineLectures",
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Master the art of building robust web applications",
      link: "/PaidonlineLectures",
    },
    // Add more lectures if needed
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-1/4 min-h-screen bg-white shadow-md" />

      {/* Main Content */}
      <div className="p-20 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">ONLINE LECTURES</h1>
        <div className="space-y-4">
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">{lecture.title}</h2>
              <p className="text-gray-600">{lecture.description}</p>
              {/* Replacing <a> with <Link> */}
              <Link
                to={lecture.link}
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
              >
                View Course
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineLectures;
