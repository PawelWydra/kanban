import Sun from "@/assets/icon-light-theme.svg";
import Moon from "@/assets/icon-dark-theme.svg";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

type NightModeToggleProps = {
  closeSidebar: () => void;
};

const NightModeToggle: React.FC<NightModeToggleProps> = ({ closeSidebar }) => {
  return (
    <div className="relative">
      <div className="p-4 flex flex-col justify-center items-center gap-6 mb-6">
        <div className="h-12 w-full mx-auto rounded-lg flex justify-center items-center gap-4 bg-gray-light">
          <Image src={Sun} alt="sun" />
          <Switch />
          <Image src={Moon} alt="moon" />
        </div>
      </div>
      <div
        onClick={closeSidebar}
        className="group pl-4 mb-6 h-12 w-48 flex gap-2 self-start items-center hover:bg-purple-100 duration-300 rounded-r-3xl cursor-pointer"
      >
        <svg className="fill-gray-medium group-hover:fill-purple" width="18" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"

          />
        </svg>
        <p className="group-hover:text-purple text-gray-medium heading-md">Hide Sidebar</p>
      </div>
    </div>
  );
};
export default NightModeToggle;
