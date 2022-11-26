import Link from "next/link";
import React from "react";

const Roadmap = () => {
  return (
    <div className="flex space-x-8 justify-center font-poppins">
      <div className="flex bg-blue-900 text-white rounded-md p-20">
        <Link href="/Roadmaps/Frontend">Frondend</Link>
      </div>
      <div className="flex bg-blue-900 text-white rounded-md p-20">
        <Link href="/">Backend</Link>
      </div>
    </div>
  );
};

export default Roadmap;
