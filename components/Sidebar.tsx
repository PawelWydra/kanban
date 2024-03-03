import Image from "next/image";
import SidebarIcon from "@/assets/icon-board.svg";
import NightModeToggle from "./NightModeToggle";

function SideBar() {
  return (
    <div className="bg-white h-full w-2/12 min-w-[16rem] flex flex-col justify-between">
      <div className="flex flex-col gap-6 p-6 px-6">
        <span className="heading-sm text-gray-medium">ALL BOARDS (3)</span>
        <div className="flex items-center gap-3">
          <Image src={SidebarIcon} alt="board icon"></Image>
          <p className="heading-md text-gray-medium">Platform Launch</p>
        </div>
      </div>
      <NightModeToggle />
    </div>
  );
}

export default SideBar;
