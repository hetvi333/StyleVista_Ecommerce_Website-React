import React from "react";

import WomanImg from "../images/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[100vh] bg-hero bg-no-repeat bg-cover bg-center py-32 block">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className=" flex flex-col justify-center">
          <div className=" font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px]  bg-red-500 mr-3"></div> New Trend
          </div>
          <h1 className="text-[55px] md:text-[70px] leading-[1.1] font-light mb-4 uppercase">
            autumn sales stylish <br />
            <span className=" font-semibold">women</span>
          </h1>
          <button className=" bg-red-500/50 py-3 px-0 w-[180px] rounded-2xl">
            <Link
              to={"/category"}
              className=" self-start uppercase font-semibold text-[18px] border-primary text-red-950"
            >
              Discover More
            </Link>
          </button>
        </div>
        {/* image */}
        <div className=" hidden md:block ">
          <img src={WomanImg} alt="" className="h-[80vh]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
