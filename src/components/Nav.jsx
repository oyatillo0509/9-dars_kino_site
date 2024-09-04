import React from "react";
import Logo from "../assets/Movie.svg";
import Avatar from "../assets/Avatar.svg";
import Shape from "../assets/Shape.svg";
import Shape2 from "../assets/Shape2.svg";
import Tv from "../assets/tv.svg";
import Book from "../assets/Bookmark.svg";

function Nav() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="w-24 h-[90vh] bg-gray-800 text-white p-5 py-7 flex flex-col items-center justify-between mt-8 ml-8 rounded">
        <div>
          <div className="flex items-center justify-center">
            <a href="/" className="text-2xl font-bold">
              <img src={Logo} alt="logo icon" />
            </a>
          </div>
          <nav className="flex flex-col items-center mt-10 gap-8">
            <a
              href="#"
              className="flex items-center justify-center hover:bg-gray-700 rounded cursor-pointer"
            >
              <img src={Shape} alt="shape icon" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center hover:bg-gray-700 rounded cursor-pointer"
            >
              <img src={Shape2} alt="shape2 icon" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center hover:bg-gray-700 rounded cursor-pointer"
            >
              <img src={Tv} alt="tv icon" />
            </a>
            <a
              href="/save"
              className="flex items-center justify-center hover:bg-gray-700 rounded cursor-pointer"
            >
              <img src={Book} alt="book icon" />
            </a>
          </nav>
        </div>

        <a href="#" className="cursor-pointer">
          <img src={Avatar} alt="avatar icon" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
