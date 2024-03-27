"use client";

import Column from "@/components/Column";
import { useEffect } from "react";
import { useHomeContext } from "@/context/HomeContext";
import EmptyBoard from "@/components/EmptyBoard";
import { IBoard } from "@/types";

type Props = {
  boards: IBoard[];
};

const Board = ({ boards }: Props) => {
  const { setBoards, setBoardSelectedId, boardSelectedId } = useHomeContext();
  useEffect(() => {
    if (boards[0]) {
      setBoards(boards);
      setBoardSelectedId(boards[0].id);
    }
  }, [boards, setBoards, setBoardSelectedId]);
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
