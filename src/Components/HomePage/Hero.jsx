import React from "react";
import ReactPlayer from "react-player";
import Video from '../../assets/videohero.mp4'
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen    ">
      {/* Video Player */}
      <div className="absolute inset-0">
        <ReactPlayer
          url={Video} // Replace with your video file or URL
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="react-player"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-purple-900/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome</h1>
        <p className="mt-4 text-lg md:text-xl bg-blue-600 px-6 py-2 rounded-md shadow-lg font-medium">
          To Online Education
        </p>
      </div>
    </div>
  );
};

export default HeroSection;









