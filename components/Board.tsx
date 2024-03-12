"use client";

import Column from "@/components/Column";
import { useEffect } from "react";
import { useContext } from "react";
import { HomeContext } from "@/context/HomeContext";
import { IBoard } from "@/types/index";
import EmptyBoard from "@/components/EmptyBoard";

type Props = {
  boards: IBoard[];
};

const Board = ({ boards }: Props) => {
  const useHomeStateContext = () => useContext(HomeContext);
  const { setBoards, setBoardSelectedId, boardSelectedId } =
    useHomeStateContext();
  useEffect(() => {
    if (boards[0]) {
      setBoards(boards);
      setBoardSelectedId(boards[0].id);
    }
  }, [boards]);
  let completeBoardSelected = boards.find(
    (board) => board.id === boardSelectedId
  );

  return (
    <>
  
      {completeBoardSelected && completeBoardSelected.columns.length > 0 ? (
        <div className="w-full h-full flex gap-10 p-6">
          {completeBoardSelected.columns.map((column, index) => (
            <Column
              name={column.name}
              key={column.id}
              tasks={column.tasks}
            ></Column>
          ))}
        </div>
      ) : (
        <EmptyBoard />
      )}
    </>
  );
};

export default Board;
