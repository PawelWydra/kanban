import Image from "next/image";
import Logo from "@/assets/logo-light.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Board from "../components/Board";

export default function Home() {
  return (
    <>
      <main className="bg-white w-screen h-screen">
        <div className="flex w-full h-24 divide-x-4">
          <div className="flex items-center relative px-6 w-2/12 min-w-[16rem] jus">
            <Image src={Logo} alt="logo" width={155} height={26}></Image>
            <h1 className="heading-xl absolute left-16 top-1/2 transform -translate-y-1/2">
              kanban
            </h1>
          </div>
          <div className="w-10/12 flex justify-between items-center px-4">
            <h2 className="heading-m">Platform Launch</h2>
            <div className="flex items-center gap-3">
              <button className="h-12 w-48 bg-violet-600 rounded-3xl heading-s text-white p-1">
                + Add New Task
              </button>
              <HiOutlineDotsVertical size={25} />
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          <Board />
        </div>
      </main>
    </>
  );
}
