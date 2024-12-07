import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const YouTubeSeries = () => {
  const videos = [
    { id: 1, url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg", title: "Artificial Intelligence" },
    { id: 2, url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg", title: "Blockchain" },
    { id: 3, url: "https://www.youtube.com/watch?v=example3", title: "Internet of Things" },
    { id: 4, url: "https://www.youtube.com/watch?v=example4", title: "Cloud Native Computing" },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Video Player Section */}
      <div className="flex-1 p-4">
        <ReactPlayer
          url={currentVideo.url}
          controls
          playing
          width="100%"
          height="100%"
          className="rounded-lg shadow-md"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">{currentVideo.title}</h2>
      </div>

      {/* Sidebar Section */}
      <div className="w-full lg:w-1/4 p-4 bg-white shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
        <ul className="space-y-4">
          {videos.map((video) => (
            <li
              key={video.id}
              onClick={() => setCurrentVideo(video)}
              className={`cursor-pointer p-2 rounded-md ${
                currentVideo.id === video.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YouTubeSeries;














