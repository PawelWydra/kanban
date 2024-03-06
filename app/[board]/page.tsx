"use client";

import { useState } from "react";
import SideBar from "@/components/Sidebar";
import { ColumnContainer } from "@/components/ColumnContainer";

function Board() {
  const [isNewColumnOpen, setIsNewColumnOpen] = useState(false);

  const createNewColumn = () => {
    setIsNewColumnOpen((prev) => !prev);
    console.log("toggleNewColumn");
  };

  return (
    <>
      <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex gap-2">
        <SideBar />
        {isNewColumnOpen ? (
          <ColumnContainer />
        ) : (
          <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <h3 className="heading-lg text-gray-medium">
              This board is empty. Create a new column to get started.
            </h3>
            <button
              className="h-12 w-48 bg-purple hover:bg-purple-hover duration-300 rounded-3xl heading-md text-white p-1"
              onClick={createNewColumn}
            >
              + Add New Column
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Board;
