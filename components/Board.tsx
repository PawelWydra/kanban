"use client";

import Column from "@/components/Column";
import { useEffect } from "react";
import { useHomeContext } from "@/context/HomeContext";
import EmptyBoard from "@/components/EmptyBoard";
import { IBoard } from "@/types";
import NewColumn from "./NewColumn";

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
    setBoardSelectedId(fetchedBoards[0].id);
  }, []);

  let completeBoardSelected = boards.find(
    (board) => board.id === boardSelectedId
  );

  return (
    <>
      {completeBoardSelected && completeBoardSelected.columns.length > 0 ? (
        <div className="w-full h-full flex gap-10 p-6 overflow-auto *:min-w-[17.5rem]">
          {completeBoardSelected.columns.map((column) => (
            <Column
              name={column.name}
              key={column.id}
              tasks={column.tasks}
            ></Column>
          ))}
          <NewColumn />
        </div>
      ) : (
        <EmptyBoard />
      )}
    </>
  );
};

export default Board;
