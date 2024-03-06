import { useState, useEffect } from "react";
import Image from "next/image";
import SidebarIcon from "@/assets/icon-board.svg";
import NightModeToggle from "./NightModeToggle";
import useEscape from "./helpers/useEscapeFunction";
import OpenSidebarIcon from "@/assets/icon-show-sidebar.svg";

type SideBarProps = {
  closeSidebar: () => void;
};

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const isVisible: boolean = useEscape();

  useEffect(() => {
    if (!isVisible) {
      setIsSidebarOpen(false);
    }
  }, [isVisible]);

  return (
    <>
      {isSidebarOpen && (
        <div className="relative bg-white h-full w-2/12 min-w-[20rem] flex flex-col justify-between z-50">
          <div className="flex flex-col py-6 *:pl-6">
            <span className="heading-sm text-gray-medium mb-6">
              ALL BOARDS (3)
            </span>
            <div className="flex items-center gap-3 h-12 w-[17.25rem] bg-purple text-white rounded-r-3xl">
              <Image src={SidebarIcon} alt="board icon" />
              <p className="heading-md ">Platform Launch</p>
            </div>
            <div className="flex items-center gap-3 h-12 w-[17.25rem] bg-white text-white rounded-r-3xl">
              <Image src={SidebarIcon} alt="board icon" />
              <p className="heading-md text-gray-medium">Marketing Plan</p>
            </div>
            <div className="flex items-center gap-3 h-12 w-[17.25rem] bg-white text-white rounded-r-3xl">
              <Image src={SidebarIcon} alt="board icon" />
              <p className="heading-md text-gray-medium">Roadmap</p>
            </div>
            <div className="flex items-center gap-3 h-12 w-[17.25rem]">
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
