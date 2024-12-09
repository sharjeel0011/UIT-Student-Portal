import React from "react";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";
const TextBooks = () => {
  const textbooks = [
    {
      id: 1,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      link: "#",
    },
    {
      id: 2,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen, Charles E. Leiserson",
      link: "#",
    },
    {
      id: 3,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      link: "#",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-1/4 min-h-screen bg-white shadow-md" />

    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">TEXT BOOK</h1>
      <div className="space-y-4">
        {textbooks.map((textbook) => (
          <div
            key={textbook.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {textbook.title}
            </h2>
            <p className="text-gray-600">{textbook.author}</p>
            <a
              href={textbook.link}
              className="inline-block mt-4 px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TextBooks;