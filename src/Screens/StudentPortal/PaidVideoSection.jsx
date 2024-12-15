
// import React, { useState } from "react";
// import ReactPlayer from "react-player";
// import Sidebar from "../../Components/StudentPortalPage/Sidebar";

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
//     <div className="flex min-h-screen bg-gray-900 ">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row flex-grow">
//         {/* Video Player */}
//         <div className="flex-1 flex justify-center items-center p-4">
//           <ReactPlayer
//             url={currentVideo}
//             playing
//             controls
//             width="100%"
//             height="100%"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Video List Sidebar */}
//         <div className="w-full md:w-1/3 bg-gray-800 overflow-y-auto h-1/2 md:h-full">
//           <h2 className="text-lg font-semibold text-center text-gray-300 py-4 border-b border-gray-700">
//             Video Library
//           </h2>
//           {videoList.map((video) => (
//             <div
//               key={video.id}
//               className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-all duration-200"
//               onClick={() => setCurrentVideo(video.url)}
//             >
//               {/* Video Thumbnail */}
//               <img
//                 src="https://placehold.co/80x80"
//                 alt="Video thumbnail"
//                 className="w-16 h-16 rounded-md mr-4 object-cover"
//               />

//               {/* Video Info */}
//               <div>
//                 <p className="text-sm font-medium text-gray-200">{video.title}</p>
//                 <p className="text-xs text-gray-400">Duration: {video.duration}</p>
//                 <p className="text-xs text-gray-400">Uploaded: {video.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;













import React, { useState } from "react";
import ReactPlayer from "react-player";
import Sidebar from "../../Components/StudentPortalPage/Sidebar";

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
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow "> {/* Added margin-left */}
        {/* Video Player */}
        <div className="flex-1 flex justify-center items-center p-4">
          <ReactPlayer
            url={currentVideo}
            playing
            controls
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Video List Sidebar */}
        <div className="w-full md:w-1/3 bg-gray-800 overflow-y-auto h-1/2 md:h-full">
          <h2 className="text-lg font-semibold text-center text-gray-300 py-4 border-b border-gray-700">
            Video Library
          </h2>
          {videoList.map((video) => (
            <div
              key={video.id}
              className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-all duration-200"
              onClick={() => setCurrentVideo(video.url)}
            >
              {/* Video Thumbnail */}
              <img
                src="https://placehold.co/80x80"
                alt="Video thumbnail"
                className="w-16 h-16 rounded-md mr-4 object-cover"
              />

              {/* Video Info */}
              <div>
                <p className="text-sm font-medium text-gray-200">{video.title}</p>
                <p className="text-xs text-gray-400">Duration: {video.duration}</p>
                <p className="text-xs text-gray-400">Uploaded: {video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
