import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#191919] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-12 p-4">
        <div className="col-span-5 sm:border-r-2">
          <ul className="flex gap-3 font-bold mb-3 text-lg">
            <a href="#" className="">
              Terms of Use
            </a>
            <a href="#" className="">
              Privacy-Policy
            </a>
            <a href="#" className="hidden sm:flex">
              Blog
            </a>
            <a href="#" className="hidden sm:flex">
              FAQ
            </a>
            <a href="#" className="hidden sm:flex">
              Watch List
            </a>
          </ul>
          <div className="">
            <p className="text-[15px]">
              © 2024 AGASOBANUYE. All Rights Reserved. All videos and shows on
              this platform are trademarks of, and all related images and
              content are the property of, AGASOBANUYE Inc. Duplication and copy
              of this is strictly prohibited. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col m-3 col-span-3">
          <header className="font-bold text-xl mb-3">Follow Us</header>
          <div className="flex gap-8">
            <BsFacebook size={20} />
            <BsTwitterX size={20} />
            <BsGithub size={20} />
            <BsInstagram size={20} />
          </div>
        </div>
        <div className="col-span-3">
          <form className="">
            <div className="flex justify-between items-center mb-2">
              <input
                type="text"
                className="p-[10px] outline-none border-none text-black w-[49%] rounded"
                placeholder="Email"
              />
              <input
                type="text"
                className="p-[10px] outline-none border-none text-black w-[49%] rounded"
                placeholder="Full Name"
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <textarea
                className="resize-none p-10 sm:p-4 w-full outline-none text-black rounded"
                placeholder="Enter your text here..."
              ></textarea>
            </div>
            <div className="flex justify-between items-center w-full">
              <button className="uppercase w-full bg-[#e50813] p-[10px] rounded font-bold hover:bg-transparent hover:text-[#e50813] hover:border">SENd</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
