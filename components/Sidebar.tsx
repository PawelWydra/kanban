import Image from "next/image";
import SidebarIcon from "@/assets/icon-board.svg";
import Sun from "@/assets/icon-light-theme.svg";
import Moon from "@/assets/icon-dark-theme.svg";
import Eye from "@/assets/icon-hide-sidebar.svg";
import { Switch } from "@/components/ui/switch";

function SideBar() {
  return (
    <div className="bg-white h-full w-2/12 min-w-[16rem] flex flex-col justify-between">
      <div className="flex flex-col gap-4 p-6 px-6">
        <span className="text-sm text-gray-400">ALL BOARDS (3)</span>
        <div className="flex items-center gap-6">
          <Image src={SidebarIcon} alt="board icon"></Image>
          <p className="heading-s font-medium text-gray-400">
            Platform Launch
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-center items-center gap-4 mb-2">
        <div className="h-12 w-56 mx-auto rounded-lg flex justify-center items-center gap-4 bg-gray-100">
          <Image src={Sun} alt="sun" />
          <Switch />
          <Image src={Moon} alt="moon" />
        </div>
        <div className="flex gap-2">
          <Image src={Eye} alt="close sidebar" />{" "}
          <p className="text-gray-300">Hide Sidebar</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
