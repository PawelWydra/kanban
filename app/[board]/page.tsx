"use client";

import SideBar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import data from "@/data.json"; // Import the data
import Column from "@/components/Column";

function Board() {
  const pathname = usePathname();

  // Function to compare pathname with board name
  const isBoardMatch = (pathname: String, boardName: String) => {
    const formattedBoardName = boardName.replace(/\s+/g, "-").toLowerCase();
    return pathname.toLowerCase() === `/${formattedBoardName}`;
  };

  const currentBoard = data.boards.find((board) =>
    isBoardMatch(pathname, board.name)
  );

  return (
    <>
      <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
        <SideBar />
        <div className="w-full h-full flex gap-10 p-6">
          {/* Check if the current board has columns */}
          {currentBoard && currentBoard.columns.length > 0 ? (
            // Render column names if the board is not empty
            <>
              {currentBoard.columns.map((column, index) => (
                <Column boardName={currentBoard.name} name={column.name} key={index}></Column>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <button className="h-12 w-48 bg-purple hover:bg-purple-hover duration-300 rounded-3xl heading-md text-white p-1">
                + Add New Column
              </button>
              <h3 className="heading-lg text-gray-medium">
                This board is empty. Create a new column to get started.
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Board;
