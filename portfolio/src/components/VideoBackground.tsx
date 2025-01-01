import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="./src/assets/video/background-video.mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
