"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoIcon from "@/assets/logo-dark.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { useModalContext } from "@/context/ModalContext";
import { useHomeContext } from "@/context/HomeContext";
import { Type } from "@/types";

const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { setAddNewTask, setEditBoard, setDeleteWarning } = useModalContext();
  const { boardSelectedId, boards } = useHomeContext();
  let completeBoardSelected = boards.find(
    (board) => board.id === boardSelectedId
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDelete = () => {
    setDeleteWarning({
      id: boardSelectedId,
      type: Type.Board,
      title: completeBoardSelected?.name!,
      active: true,
    });
    setIsDropdownVisible(false);
  };

  const handleEdit = () => {
    {
      setEditBoard(true);
      setIsDropdownVisible(false);
    }
  };
  return (
    <div className="flex w-full h-24 divide-x-4">
      <div className="flex items-center px-6 w-2/12 min-w-[20rem]">
        {isDropdownVisible && (
          <div className="absolute right-16 top-24 bg-white p-2 flex flex-col text-body-md rounded-xl">
            <button
              onClick={handleEdit}
              className="text-gray-medium h-12 w-40 p-2 text-left"
            >
              Edit Board
            </button>
            <button
              onClick={handleDelete}
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
        <h2 className="heading-xl">{completeBoardSelected?.name}</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAddNewTask(true)}
            className={`flex justify-center items-center h-8 md:h-12 w-12
             md:w-48 rounded-3xl heading-xl md:heading-md ${
               !completeBoardSelected?.columns ||
               completeBoardSelected.columns.length === 0
                 ? "bg-purple-hover text-white cursor-not-allowed"
                 : "bg-purple text-white hover:bg-purple-hover duration-300"
             }`}
            disabled={
              !completeBoardSelected?.columns ||
              completeBoardSelected.columns.length === 0
            }
          >
            {windowWidth <= 768 ? <FaPlus size={14} /> : "+ Add New Task"}
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
