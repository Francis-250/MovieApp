import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

function Navbar() {
  const showSearch = () => {
    const searchBox = document.getElementById("searchBox");
    if (searchBox.style.display==="flex") {
      searchBox.style.display="none";
    } else{
      searchBox.style.display="flex";
    }
  };

  return (
    <div className="">
      <div className="hidden sm:flex bg-black justify-between items-center px-4">
        <div className="flex items-center">
          <img src={logo} className="w-[100px]" />
          <header className="uppercase font-bold text-[rgb(229,8,19)] text-3xl">
            AGASobanuye
          </header>
        </div>
        <div className="flex p-2 bg-white rounded cursor-pointer">
          <div className="">
            <input
              type="text"
              className="outline-none text-[rgb(229,8,19)] p-[10px] w-[200px] bg-transparent focus:w-[400px] transition-all duration-1000"
            />
          </div>
          <div className="flex justify-center items-center">
            <FaSearch className="text-[rgb(229,8,19)]" size={30} />
          </div>
        </div>
      </div>
      <div className="sm:hidden bg-[rgb(19,19,19)] p-1 border-b-2">
        <div className="flex items-center justify-between">
          <img src={logo} className="w-[90px]" />
          <header className="uppercase font-bold text-[rgb(229,8,19)] text-3xl">
            AGASobanuye
          </header>
          <FaSearch size={30} onClick={showSearch} />
        </div>
      </div>
      <div
        id="searchBox"
        className="sm:hidden flex items-center justify-between p-3 w-full bg-white mt-3"
      >
        <input
          type="text"
          className="outline-none text-[rgb(229,8,19)] p-[10px] w-[80%] bg-transparent"
        />
        <FaSearch className="text-[rgb(229,8,19)]" size={30} />
      </div>
    </div>
  );
}

export default Navbar;
