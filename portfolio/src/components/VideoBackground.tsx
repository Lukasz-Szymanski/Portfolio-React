import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 lect-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted>
        <source
          src="./src/assets/video/background-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>
  );
};

export default VideoBackground;
