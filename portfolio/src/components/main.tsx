import React from "react";

const Main: React.FC = () => {
  return (
    <div className="fixed top-32 left-32 w-full z-20">
      <div className="container mx-auto flex items-center justify-between py-32 px-32">
        <div className="flex space-x-10">
          <img
            src="./src/assets/images/profile-img.png"
            alt="Łukasz Szymański"
            width={120}
            height={120}
            className="rounded-full w-64"
          />
          <div>
            <h1>Łukasz Szymański</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
