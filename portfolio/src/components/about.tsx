import React from "react";
import Profile from "../assets/images/profile-img.png";

const About: React.FC = () => {
  return (
    <section
      className="fixed z-10 w-full h-screen flex items-center justify-center body-font pb-32"
      id="about">
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <img
          className="lg:w-1/6 md:w-1/4 w-1/3 mb-10 object-cover object-center rounded-full"
          alt="Łukasz Szymański"
          src={Profile}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Łukasz Szymański
          </h1>
          <p className="mb-8 leading-relaxed">
            Freelance Web Developer
            <br />
            Musician
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
