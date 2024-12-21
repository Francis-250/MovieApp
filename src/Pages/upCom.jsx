import React from "react";
import { upcome } from "./Data";
import { FaPlay } from "react-icons/fa";

function upCom() {
  return (
    <div className="p-10 mb-5">
      <div className="text-lg">
        <header className="mb-3">Upcoming Movies</header>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {upcome.map((data, index) => (
          <div
            className="bg-cover bg-center rounded p-4"
            style={{
              backgroundImage: `url(${data.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={data.id}
          >
            <div className="">
              <header className="text-xl font-bold mb-3">{data.name}</header>
              <header className="font-bold mb-3">{data.time}</header>
              <div className="mt-2">
                <button className="uppercase flex justify-between items-center w-[100px] bg-[#e50813] p-[10px] rounded font-bold">
                  <FaPlay /> play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default upCom;
