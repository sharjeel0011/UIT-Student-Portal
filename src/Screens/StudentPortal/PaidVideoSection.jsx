// import React, { useState } from "react";
// import ReactPlayer from "react-player";

// const App = () => {
//   const [currentVideo, setCurrentVideo] = useState(
//     "https://www.w3schools.com/html/mov_bbb.mp4"
//   );

//   // Sample video data
//   const videoList = [
//     {
//       id: 1,
//       title: "Video 1",
//       duration: "3:15",
//       date: "2 months ago",
//       url: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 2,
//       title: "Video 2",
//       duration: "4:10",
//       date: "3 months ago",
//       url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
//     },
//     {
//       id: 3,
//       title: "Video 3",
//       duration: "5:30",
//       date: "1 month ago",
//       url: "https://www.w3schools.com/html/movie.mp4",
//     },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-800 overflow-y-auto">
//         {videoList.map((video) => (
//           <div
//             key={video.id}
//             className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
//             onClick={() => setCurrentVideo(video.url)}
//           >
//             <img
//               src="https://placehold.co/60x60"
//               alt="Video thumbnail"
//               className="w-12 h-12 mr-4"
//             />
//             <div>
//               <p className="text-sm">{video.title}</p>
//               <p className="text-xs text-gray-400">{video.duration}</p>
//               <p className="text-xs text-gray-400">{video.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Video Player */}
//       <div className="flex-1 flex flex-col justify-center items-center relative">
//         <ReactPlayer
//           url={currentVideo}
//           playing
//           controls
//           width="100%"
//           height="80%"
//           className="rounded-lg overflow-hidden"
//         />

       
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Sidebar from'../../Components/StudentPortalPage/Sidebar'
const App = () => {
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.w3schools.com/html/mov_bbb.mp4"
  );

  // Sample video data
  const videoList = [
    {
      id: 1,
      title: "Video 1",
      duration: "3:15",
      date: "2 months ago",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Video 2",
      duration: "4:10",
      date: "3 months ago",
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    },
    {
      id: 3,
      title: "Video 3",
      duration: "5:30",
      date: "1 month ago",
      url: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-800 overflow-y-auto h-1/2 md:h-full">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
            onClick={() => setCurrentVideo(video.url)}
          >
            <img
              src="https://placehold.co/60x60"
              alt="Video thumbnail"
              className="w-12 h-12 mr-4"
            />
            <div>
              <p className="text-sm">{video.title}</p>
              <p className="text-xs text-gray-400">{video.duration}</p>
              <p className="text-xs text-gray-400">{video.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player */}
      <div className="flex-1 flex justify-center items-center relative">
        <ReactPlayer
          url={currentVideo}
          playing
          controls
          width="100%"
          height="100%"
          className="rounded-lg overflow-hidden"
        />
      </div>
    </div>
    </div>
  );
};

export default App;