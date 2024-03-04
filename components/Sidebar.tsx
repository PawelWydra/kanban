import Image from "next/image";
import SidebarIcon from "@/assets/icon-board.svg";
import NightModeToggle from "./NightModeToggle";

type SideBarProps = {
  closeSidebar: () => void;
};


const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
  return (
    <div className="bg-white h-full w-2/12 min-w-[20rem] flex flex-col justify-between">
      <div className="flex flex-col py-6 *:pl-6">
        <span className="heading-sm text-gray-medium mb-6">ALL BOARDS (3)</span>
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
      <NightModeToggle closeSidebar={closeSidebar}/>
    </div>
  );
}

export default SideBar;
