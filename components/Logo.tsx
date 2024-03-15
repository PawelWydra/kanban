"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import LogoIcon from "@/assets/logo-dark.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ModalContext } from "@/context/ModalContext";

const Logo = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const useModalStateContext = () => useContext(ModalContext);

  const { setAddNewTask, setEditBoard, setDeleteWarning } =
    useModalStateContext();
  return (
    <div className="flex w-full h-24 divide-x-4">
      <div className="flex items-center px-6 w-2/12 min-w-[20rem]">
        {isDropdownVisible && (
          <div className="absolute right-16 top-24 bg-white p-2 flex flex-col text-body-md rounded-xl">
            <button
              onClick={() => setEditBoard(true)}
              className="text-gray-medium h-12 w-40 p-2 text-left"
            >
              Edit Board
            </button>
            <button
              onClick={() => setDeleteWarning(true)}
              className="text-destructive h-12 w-40 p-2 text-left"
            >
              Delete Board
            </button>
          </div>
        )}
        <button>
          <Image src={LogoIcon} alt="logo" width={155} height={26}></Image>
        </button>
      </div>
      <div className="w-10/12 flex justify-between items-center px-4">
        <h2 className="heading-xl">Platform Launch</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAddNewTask(true)}
            className="h-12 w-48 bg-purple hover:bg-purple-hover duration-300 rounded-3xl heading-md text-white p-1"
          >
            + Add New Task
          </button>
          <button onClick={() => setIsDropdownVisible((prev) => !prev)}>
            <HiOutlineDotsVertical size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
