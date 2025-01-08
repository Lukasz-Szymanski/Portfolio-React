import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <video
        className="absolute  w-full h-full object-cover z-0"
        autoPlay
        loop
        muted>
        <source
          src="./src/assets/video/background-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
    </div>
  );
};

export default VideoBackground;
