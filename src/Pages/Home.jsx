import React from "react";
import Navbar from "./Navbar";
import { homeData } from "./Data";
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
    <div className="">
      {homeData.map((data, index) => (
        <div
          className="relative h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          key={data.id}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
          <div className="py-40 px-[60px] sm:w-[60%]">
            <div className="">
              <header className="uppercase text-[80px] font-bold">
                {data.name}
              </header>
            </div>
            <div className="mb-5">
              <p className="text-xl">{data.time}</p>
            </div>
            <div className="mb-5 text-lg">
              <p className="">{data.desc}</p>
            </div>
            <div className="">
              <p className="font-bold">
                <span className="text-[rgb(229,8,19)] capitalize mr-2">
                  starring
                </span>
                {data.starring}
              </p>
              <p className="font-bold">
                <span className="text-[rgb(229,8,19)] capitalize mr-2">
                  genres
                </span>
                {data.genres}
              </p>
              <p className="font-bold">
                <span className="text-[rgb(229,8,19)] capitalize mr-2">
                  tags
                </span>
                {data.tags}
              </p>
            </div>
            <div className="mt-2">
              <button className="uppercase flex justify-between items-center w-[100px] bg-[#e50813] p-[10px] rounded font-bold">
               <FaPlay /> play
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
