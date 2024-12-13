
import React, { useState } from "react";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

const TextBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const textbooks = [
    {
      id: 1,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      link: "#",
    },
    {
      id: 2,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen, Charles E. Leiserson",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      link: "#",
    },
    {
      id: 3,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      link: "#",
    },
  ];

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-1/4 min-h-screen bg-white shadow-md" />

      <div className="p-20 bg-gray-100 min-h-screen">
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
              <button
                onClick={() => handleViewDetails(textbook)}
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing details */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedBook.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedBook.author}</p>
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="w-full mb-4"
            />
            <a
              href={selectedBook.link}
              className="block mt-4 px-6 py-2 text-white bg-blue-900 rounded-full text-center hover:bg-blue-700"
              download
            >
              Download Book
            </a>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextBooks;















