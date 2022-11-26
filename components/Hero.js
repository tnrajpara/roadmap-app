import React from "react";
import Image from "next/image";
import illustration from "../images/hehe.jpg";
const Hero = () => {
  return (
    <div className="flex justify-between flex-grow p-36 flew-row">
      <div className="m-10">
        <h1 className="text-5xl pl-10 font-bold tracking-wide ">
          Helping beginners to grow
        </h1>
        <h2 className="p-10 text-3xl w-5/6">
          Choose proper career for your self by our roadmaps.
        </h2>
        <div className="pl-10">
          <button className="bg-cyan-300 w-48 h-14 backdrop-blur-lg rounded font-semibold text-xl transition duration-200 hover:scale-110">
            Learn more &gt;
          </button>
        </div>
      </div>
      <div>
        <Image
          src={illustration}
          width={700}
          height={700}
          alt="Image not available"
        />
      </div>
    </div>
  );
};

export default Hero;
