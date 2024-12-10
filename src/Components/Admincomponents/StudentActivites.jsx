// // import React from 'react';

// // const StudentActivities = () => {
// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-md mb-6">
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-lg font-semibold">Students Activities</h2>
// //         <select className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none">
// //           <option>2023</option>
// //           <option>2022</option>
// //           <option>2021</option>
// //         </select>
// //       </div>
// //       <div className="flex">
// //         <div className="w-3/4">
// //           <div className="bg-gray-200 h-48 rounded-lg"></div>
// //         </div>
// //         <div className="w-1/4 flex flex-col items-center justify-center">
// //           <h3 className="text-lg font-semibold mb-2">Active users Ratio</h3>
// //           <div className="bg-gray-200 w-24 h-24 rounded-full"></div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentActivities;















// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Doughnut } from "react-chartjs-2";

// const StudentActivities = () => {
//   // Data for Bar Chart
//   const barData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     datasets: [
//       {
//         label: "Active Students",
//         data: [120, 200, 180, 240, 300, 280, 250, 310, 320, 290, 270, 330],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data for Doughnut Chart
//   const doughnutData = {
//     labels: ["Active", "Inactive"],
//     datasets: [
//       {
//         data: [70, 30],
//         backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Students Activities</h2>
//         <select className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none">
//           <option>2023</option>
//           <option>2022</option>
//           <option>2021</option>
//         </select>
//       </div>

//       {/* Charts */}
//       <div className="flex">
//         {/* Bar Chart */}
//         <div className="w-3/4">
//           <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
//         </div>
//         {/* Doughnut Chart */}
//         <div className="w-1/4 flex flex-col items-center justify-center">
//           <h3 className="text-lg font-semibold mb-2">Active Users Ratio</h3>
//           <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentActivities;













import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentOverview = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Active Students",
        data: [20, 45, 30, 50, 70],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [50, 40, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Student Activities Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        {/* Doughnut Chart */}
        <div className="p-4 bg-gray-100 rounded-lg flex justify-center">
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
