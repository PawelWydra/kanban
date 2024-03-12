import React from "react";
import Image from "next/image";
import LogoIcon from "@/assets/logo-dark.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Logo = () => {
  return (
    <div className="flex w-full h-24 divide-x-4">
      <div className="flex items-center px-6 w-2/12 min-w-[20rem]">
        <button>
          <Image src={LogoIcon} alt="logo" width={155} height={26}></Image>
        </button>
      </div>
      <div className="w-10/12 flex justify-between items-center px-4">
        <h2 className="heading-xl">Platform Launch</h2>
        <div className="flex items-center gap-3">
          <button className="h-12 w-48 bg-purple hover:bg-purple-hover duration-300 rounded-3xl heading-md text-white p-1">
            + Add New Board
          </button>
          <button>
            <HiOutlineDotsVertical size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
