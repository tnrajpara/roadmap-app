import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 font-semibold font-poppins">
      <h1 className="font-bold text-4xl pl-40 mt-2">Devmakerz</h1>
      <div className="flex space-x-10 float-right p-3  pr-11">
        <div className="group transition-all duration-300 ease-in-out w-fit">
          <button className="bg-left-bottom bg-gradient-to-l from-cyan-500 to-cyan-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Learn more &gt;
          </button>
        </div>
        <Link href="/">Courses</Link>
        <Link href="/">Study material</Link>
        <div class="group inline-block relative">
          <button class=" text-gray-700 font-bold w-full rounded inline-flex items-center">
            <span class="mr-1">Roadmaps</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li class="">
              <Link
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/Roadmaps/Fullstack"
              >
                FullStack Devlopment
              </Link>
            </li>
            <li class="">
              <Link
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/backend-developer"
              >
                Data science
              </Link>
            </li>
            <li class="">
              <Link
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/graphics-designer"
              >
                Machine learning
              </Link>
            </li>
            <li class="">
              <Link
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/graphics-designer"
              >
                Application devlopment
              </Link>
            </li>
          </ul>
        </div>
        <button className="p-2 bg-cyan-400 pt-1 rounded-sm text-black hover:text-white">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
