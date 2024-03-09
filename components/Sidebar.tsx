"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import SidebarIcon from "@/assets/icon-board.svg";
import NightModeToggle from "./NightModeToggle";
import useEscape from "./helpers/useEscapeFunction";
import OpenSidebarIcon from "@/assets/icon-show-sidebar.svg";
import data from "@/data.json";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSideBar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const isVisible = useEscape();
  const pathName = usePathname();

  const formattedUrl = (url: string) => {
    return url.replace(/\s+/g, "-");
  };

  const isBoardMatch = (pathname: String, boardName: String) => {
    const formattedBoardName = boardName.replace(/\s+/g, "-").toLowerCase();
    return pathname.toLowerCase() === `/${formattedBoardName}`;
  };

  useEffect(() => {
    if (!isVisible) {
      setIsSidebarOpen(false);
    }
  }, [isVisible]);

  return (
    <>
      {isSidebarOpen && (
        <div className="relative bg-white h-full w-2/12 min-w-[20rem] flex flex-col justify-between z-50">
          <div className="flex flex-col py-6">
            <span className="heading-sm text-gray-medium mb-6 ml-6">
              ALL BOARDS ({data.boards.length})
            </span>
            {data.boards.map((board, index) => (
              <Link href={formattedUrl(board.name)} key={index}>
                <div
                  className={`flex items-center gap-3 h-12 w-[17.25rem] ${
                    isBoardMatch(pathName, board.name) // Replace spaces with hyphens and lowercase
                      ? "bg-purple text-white"
                      : "bg-white text-gray-medium"
                  } rounded-r-3xl cursor-pointer`}
                >
                  <Image src={SidebarIcon} alt="board icon" className="ml-6" />
                  <p className="heading-md">{board.name}</p>
                </div>
              </Link>
            ))}
            <div className="flex items-center gap-3 h-12 w-[17.25rem] ml-6 cursor-pointer">
              <Image src={SidebarIcon} alt="board icon" />
              <p className="heading-md text-purple">+ Create New Board</p>
            </div>
          </div>
          <NightModeToggle closeSidebar={toggleSideBar} />
        </div>
      )}
      {!isSidebarOpen && (
        <div
          onClick={toggleSideBar}
          className="absolute left-0 bottom-6 pl-4 h-12 w-12 flex gap-2 self-start items-center bg-purple hover:bg-purple-hover duration-300 rounded-r-3xl cursor-pointer"
        >
          <Image src={OpenSidebarIcon} alt="open sidebar icon" />
        </div>
      )}
    </>
  );
};

export default SideBar;
