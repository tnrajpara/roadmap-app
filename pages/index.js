import React from "react";
import Favorite from "../components/Favorite";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
const index = () => {
  return (
    <div className="font-poppins">
      <div className="bg-gradient-to-b from-purple-800 to-cyan-500 absolute blur-3xl w-full h-8 rotate-45 transition-colors" />
      <div className="bg-gradient-to-b from-purple-800 to-pink-500 absolute blur-3xl w-96 h-96 rotate-45 transition-colors -z-50 opacity-25" />
      <Hero />
      <Favorite />
      <Footer />
    </div>
  );
};

export default index;
