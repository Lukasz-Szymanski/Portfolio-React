import React from "react";
import Profile from "../assets/images/profile-img.png";

const About: React.FC = () => {
  return (
    <section
      className="fixed z-10 w-full h-screen flex items-center justify-center body-font pb-40"
      id="about">
      <div className="py-4 sm:py-6 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64  overflow-hidden rounded-lg shadow-lg md:h-auto">
                <img
                  src={Profile}
                  loading="lazy"
                  alt="Łukasz Szymański"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <h1 className="mb-4 text-center text-2xl font-bold 0 sm:text-3xl md:mb-6 md:text-left">
                Łukasz Szymański
              </h1>
              <p className="text-center font-bold  md:text-left mb-5">
                Freelance Web Developer
              </p>

              <p className="mb-6 text-justify sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
