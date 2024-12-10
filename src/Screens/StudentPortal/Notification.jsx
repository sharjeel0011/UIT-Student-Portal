import React from "react";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";
const Notifications = () => {
  const notifications = [
    {
      date: "Sep 20, 2024",
      title: "Attendance PMC Batch 51 to 55 Quarter 2",
      description: "Test check has been scheduled from 10th July to 15th July 2024.",
      link: "#",
      isActive: true,
    },
    {
      date: "Sep 15, 2024",
      title: "PMC Batch 56 Quarter 1 Result Announcement",
      description: "Results are now available online.",
      link: "#",
      isActive: true,
    },
    {
      date: "Sep 10, 2024",
      title: "Attendance Missed Quizzes for Batch 36-50 Quarter 4",
      description: "Ensure you attend the next scheduled quizzes.",
      link: "#",
      isActive: true,
    },
    {
        date: "Sep 20, 2024",
        title: "Attendance PMC Batch 51 to 55 Quarter 2",
        description: "Test check has been scheduled from 10th July to 15th July 2024.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 15, 2024",
        title: "PMC Batch 56 Quarter 1 Result Announcement",
        description: "Results are now available online.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 10, 2024",
        title: "Attendance Missed Quizzes for Batch 36-50 Quarter 4",
        description: "Ensure you attend the next scheduled quizzes.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 20, 2024",
        title: "Attendance PMC Batch 51 to 55 Quarter 2",
        description: "Test check has been scheduled from 10th July to 15th July 2024.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 15, 2024",
        title: "PMC Batch 56 Quarter 1 Result Announcement",
        description: "Results are now available online.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 10, 2024",
        title: "Attendance Missed Quizzes for Batch 36-50 Quarter 4",
        description: "Ensure you attend the next scheduled quizzes.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 20, 2024",
        title: "Attendance PMC Batch 51 to 55 Quarter 2",
        description: "Test check has been scheduled from 10th July to 15th July 2024.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 15, 2024",
        title: "PMC Batch 56 Quarter 1 Result Announcement",
        description: "Results are now available online.",
        link: "#",
        isActive: true,
      },
      {
        date: "Sep 10, 2024",
        title: "Attendance Missed Quizzes for Batch 36-50 Quarter 4",
        description: "Ensure you attend the next scheduled quizzes.",
        link: "#",
        isActive: true,
      },
    // Add more notifications dynamically if needed
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
   
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-900 text-center mb-6">
          Announcements
        </h1>
        <ul className="steps steps-vertical w-full">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className={`step ${
                notification.isActive ? "step-primary" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="font-bold text-sm text-gray-600">
                  {notification.date}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-600">{notification.description}</p>
                  <a
                    href={notification.link}
                    className="inline-block mt-2 text-sm text-blue-600 underline hover:text-blue-800"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Notifications;
