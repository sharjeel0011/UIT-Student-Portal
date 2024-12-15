import React from "react";
import ReactPlayer from "react-player";
import Video from '../../assets/videohero.mp4'
const HeroSection = () => {
  return (
    <div className=" w-[100%] h-screen    ">
      {/* Video Player */}
      <div className="absolute mt-10 inset-0">
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

    
    </div>
  );
};

export default HeroSection;




