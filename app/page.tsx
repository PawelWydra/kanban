"use client";

import Image from "next/image";
import Logo from "@/assets/logo-dark.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Board from "../components/Board";
import Sidebar from "@/components/Sidebar";
import OpenSidebar from "@/assets/icon-show-sidebar.svg";
import { useState } from "react";
import DeleteWarning from "@/components/DeleteWarning";
import TaskInfo from "@/components/TaskInfo";
import AddNewTask from "@/components/AddNewTask";
import AddNewBoard from "@/components/AddNewBoard";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar: () => void = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
    <AddNewBoard/>
      <main className="bg-white w-screen h-screen">
        <div className="flex w-full h-24 divide-x-4">
          <div className="flex items-center px-6 w-2/12 min-w-[20rem]">
            <button onClick={toggleSideBar}>
              <Image src={Logo} alt="logo" width={155} height={26}></Image>
            </button>
          </div>
          <div className="w-10/12 flex justify-between items-center px-4">
            <h2 className="heading-xl">Platform Launch</h2>
            <div className="flex items-center gap-3">
              <button className="h-12 w-48 bg-purple hover:bg-purple-hover duration-300 rounded-3xl heading-md text-white p-1">
                + Add New Task
              </button>
              <button onClick={toggleSideBar}>
                <HiOutlineDotsVertical size={25} />
              </button>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          {isSidebarOpen && <Sidebar closeSidebar={toggleSideBar} />}
          <div
            onClick={toggleSideBar}
            className="absolute left-0 bottom-6 pl-4 h-12 w-12 flex gap-2 self-start items-center bg-purple hover:bg-purple-hover duration-300 rounded-r-3xl cursor-pointer"
          >
            <Image src={OpenSidebar} alt="close sidebar" />
          </div>
          <Board />
        </div>
      </main>
    </>
  );
}
