import Image from "next/image";
import React from "react";
import game from "../images/game.jpg";
import ds from "../images/Datascience.jpg";
import dev from "../images/devlopment.jpg";
import machine from "../images/Machine.jpg";
const Favorite = () => {
  return (
    <div>
      <div className="flex justify-center text-3xl p-4">Services</div>
      <div className="flex">
        <div>
          <Image src={game} height={300} alt="image not available" />
          <h1 className="flex">Game devlopment</h1>
        </div>
        <div className="text-center justify-center">
          <Image src={dev} height={300} alt="image not available" />
          <h1 className="flex">Full stack devlopment</h1>
        </div>
        <div className="text-center justify-center">
          <Image src={ds} height={300} alt="image not available" />
          <h1 className="flex">Data science</h1>
        </div>
        <div className="text-center justify-center">
          <Image src={machine} height={300} alt="image not available" />
          <h1 className="flex">Machine learning</h1>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
