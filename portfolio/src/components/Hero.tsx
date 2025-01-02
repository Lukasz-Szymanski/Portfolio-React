import React from "react";
import Profile from "../assets/images/profile-img.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-20  body-font">
      <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
        <img
          className="lg:w-1/4 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded-full"
          alt="Łukasz Szymański"
          src={Profile}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Łukasz Szymański
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ullam
            laborum deserunt corrupti nostrum fugit porro voluptatibus minima
            neque nobis quia culpa quidem excepturi, odio, aperiam nihil non
            eaque soluta, similique quibusdam eveniet animi voluptas? Placeat
            sunt libero quibusdam repellat nulla, ad iusto voluptatem illo
            consequuntur sit quas facere consectetur omnis unde tenetur!
            Ratione, eaque!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
