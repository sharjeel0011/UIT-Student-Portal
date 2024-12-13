// import React, { useState } from "react";
// import ReactPlayer from "react-player/youtube";

// const YouTubeSeries = () => {
//   const videos = [
//     { id: 1, url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg", title: "Artificial Intelligence" },
//     { id: 2, url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg", title: "Blockchain" },
//     { id: 3, url: "https://www.youtube.com/watch?v=example3", title: "Internet of Things" },
//     { id: 4, url: "https://www.youtube.com/watch?v=example4", title: "Cloud Native Computing" },
//   ];

//   const [currentVideo, setCurrentVideo] = useState(videos[0]);

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
//       {/* Video Player Section */}
//       <div className="flex-1 p-4">
//         <ReactPlayer
//           url={currentVideo.url}
//           controls
//           playing
//           width="100%"
//           height="100%"
//           className="rounded-lg shadow-md"
//         />
//         <h2 className="mt-4 text-xl font-bold text-gray-800">{currentVideo.title}</h2>
//       </div>

//       {/* Sidebar Section */}
//       <div className="w-full lg:w-1/4 p-4 bg-white shadow-lg">
//         <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
//         <ul className="space-y-4">
//           {videos.map((video) => (
//             <li
//               key={video.id}
//               onClick={() => setCurrentVideo(video)}
//               className={`cursor-pointer p-2 rounded-md ${
//                 currentVideo.id === video.id
//                   ? "bg-blue-500 text-white"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               {video.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default YouTubeSeries;











import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import AdminNav from "../AdminNav";

const YouTubeSeries = () => {
  const videos = [
    { 
      id: 1, 
      url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg", 
      title: "Artificial Intelligence", 
      duration: "10:15", 
      date: "Dec 2024" 
    },
    { 
      id: 2, 
      url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg", 
      title: "Blockchain", 
      duration: "12:30", 
      date: "Nov 2024" 
    },
    { 
      id: 3, 
      url: "https://www.youtube.com/watch?v=example3", 
      title: "Internet of Things", 
      duration: "8:45", 
      date: "Oct 2024" 
    },
    { 
      id: 4, 
      url: "https://www.youtube.com/watch?v=example4", 
      title: "Cloud Native Computing", 
      duration: "14:00", 
      date: "Sept 2024" 
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when video changes
    setLoading(true);
  }, [currentVideo]);

  return (
<div>
 

    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
  
      {/* Video Player Section */}
      <div className="flex-1 p-4 mb-6 md:mb-0">
        <div className="relative pb-[56.25%] h-0">
          <ReactPlayer
            url={currentVideo.url}
            controls
            playing
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded-lg shadow-lg"
            onReady={() => setLoading(false)}
          />
        </div>
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center text-white text-xl">
            Loading...
          </div>
        )}
        <h2 className="mt-4 text-xl font-semibold">{currentVideo.title}</h2>
      </div>

      {/* Sidebar Section */}
      <div className="w-full md:w-1/4 bg-gray-800 overflow-y-auto h-1/2 md:h-full">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src="https://placehold.co/60x60"
              alt="Video thumbnail"
              className="w-12 h-12 mr-4 rounded-md"
            />
            <div>
              <p className="text-sm">{video.title}</p>
              <p className="text-xs text-gray-400">{video.duration}</p>
              <p className="text-xs text-gray-400">{video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default YouTubeSeries;



