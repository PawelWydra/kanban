import Sun from "@/assets/icon-light-theme.svg";
import Moon from "@/assets/icon-dark-theme.svg";
import Eye from "@/assets/icon-hide-sidebar.svg";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

function NightModeToggle() {
  return (
    <div className="p-4 flex flex-col justify-center items-center gap-2 mb-6">
      <div className="h-12 w-full mx-auto rounded-lg flex justify-center items-center gap-4 bg-gray-light">
        <Image src={Sun} alt="sun" />
        <Switch />
        <Image src={Moon} alt="moon" />
      </div>
      <div className="flex gap-2 self-start items-center">
        <Image src={Eye} alt="close sidebar" />
        <p className="text-gray-medium heading-md">Hide Sidebar</p>
      </div>
    </div>
  );
}

export default NightModeToggle;
