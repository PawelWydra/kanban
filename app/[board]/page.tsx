"use client";

import SideBar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import data from "@/data.json"; // Import the data
import Column from "@/components/Column";
import EmptyBoard from "@/components/EmptyBoard";
import { useContext } from "react";
import { HomeContext } from "@/context/HomeContext";

function Board() {

  const useHomeStateContext = () => useContext(HomeContext);
  const { boardSelected } = useHomeStateContext();
  const currentBoard = data.boards.find(
    (board) => board.name === boardSelected
  );

  return (
    <>
      {/* Check if the current board has columns */}
      {currentBoard && currentBoard.columns.length > 0 ? (
        // Render column names if the board is not empty
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          <SideBar />
          <div className="w-full h-full flex gap-10 p-6">
            {currentBoard.columns.map((column, index) => (
              <Column
                boardName={currentBoard.name}
                name={column.name}
                key={index}
              ></Column>
            ))}
          </div>
        </div>
      ) : (
        <EmptyBoard />
      )}
    </>
  );
}

export default Board;
