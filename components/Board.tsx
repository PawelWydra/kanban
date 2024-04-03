"use client";

import Column from "@/components/Column";
import { useEffect } from "react";
import { useHomeContext } from "@/context/HomeContext";
import EmptyBoard from "@/components/EmptyBoard";
import { IBoard } from "@/types";

type Props = {
  fetchedBoards: IBoard[];
};

const Board = ({ fetchedBoards }: Props) => {
  const { setBoards, setBoardSelectedId, boardSelectedId, boards } =
    useHomeContext();
  useEffect(() => {
    if (!boards[0]) {
      setBoards(fetchedBoards);
    }
    if (boards === fetchedBoards) {
      setBoardSelectedId(boards[0].id);
    } 
  });
  let completeBoardSelected = boards.find(
    (board) => board.id === boardSelectedId
  );

  return (
    <>
      {completeBoardSelected && completeBoardSelected.columns.length > 0 ? (
        <div className="w-full h-full flex gap-10 p-6">
          {completeBoardSelected.columns.map((column) => (
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
