// import React from "react";
// import { FaRobot, FaMobileAlt, FaLink, FaGlobe } from "react-icons/fa";

// const AvailablePrograms = () => {
//   // List of programs with icons and colors
//   const programs = [
//     {
//       id: 1,
//       name: "Artificial Intelligence",
//       icon: <FaRobot className="text-white text-3xl" />,
//       bgColor: "bg-blue-900",
//     },
//     {
//       id: 2,
//       name: "Cloud Native and Mobile Web",
//       icon: <FaMobileAlt className="text-white text-3xl" />,
//       bgColor: "bg-pink-500",
//     },
//     {
//       id: 3,
//       name: "Blockchain",
//       icon: <FaLink className="text-white text-3xl" />,
//       bgColor: "bg-yellow-400",
//     },
//     {
//       id: 4,
//       name: "Internet of Things and AI",
//       icon: <FaGlobe className="text-white text-3xl" />,
//       bgColor: "bg-teal-500",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 p-6">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Available Programs</h2>
//         <div className="flex flex-wrap gap-4">
//           {programs.map((program) => (
//             <div
//               key={program.id}
//               className="flex items-center bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <div className={`${program.bgColor} p-4`}>{program.icon}</div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{program.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailablePrograms;







import React from "react";
import { FaRobot, FaMobileAlt, FaLink, FaGlobe } from "react-icons/fa";

const AvailablePrograms = () => {
  // List of programs with icons and colors
  const programs = [
    {
      id: 1,
      name: "Artificial Intelligence",
      icon: <FaRobot className="text-white text-3xl" />,
      bgColor: "bg-blue-900",
    },
    {
      id: 2,
      name: "Cloud Native and Mobile Web",
      icon: <FaMobileAlt className="text-white text-3xl" />,
      bgColor: "bg-pink-500",
    },
    {
      id: 3,
      name: "Blockchain",
      icon: <FaLink className="text-white text-3xl" />,
      bgColor: "bg-yellow-400",
    },
    {
      id: 4,
      name: "Internet of Things and AI",
      icon: <FaGlobe className="text-white text-3xl" />,
      bgColor: "bg-teal-500",
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Available Programs</h2>
        <div className="flex flex-wrap gap-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-auto"
            >
              <div className={`${program.bgColor} p-4`}>
                {program.icon}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{program.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailablePrograms;
