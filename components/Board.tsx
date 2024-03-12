"use client";

import Column from "@/components/Column";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { getBoards } from "@/app/api/board/route";
import { useContext } from "react";
import { HomeContext } from "@/context/HomeContext";
import { IBoard } from "@/types/index";
import SideBar from "@/components/Sidebar";
import EmptyBoard from "@/components/EmptyBoard";

type Props = {
  boards: IBoard[];
};



const Board = ({ boards }: Props) => {
  const useHomeStateContext = () => useContext(HomeContext);
  const { setBoards, setBoardSelectedId, boardSelectedId } =
    useHomeStateContext();

  console.log(boards);

  let completeBoardSelected = {
    name: "complete",
    id: boardSelectedId,
    columns: {
      name: "name",
      id: "323",
    },
  };

  return (
    <>
      <SideBar />
      {completeBoardSelected && completeBoardSelected.columns.length > 0 ? (
        <div className="w-full h-full flex gap-10 p-6">
          {completeBoardSelected.columns.map((column, index) => (
            <Column name={column.name} key={column.id}></Column>
          ))}
        </div>
      ) : (
        <EmptyBoard />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const boards = await getBoards();
  const updatedboards = JSON.parse(JSON.stringify(boards));
  return { props: { boards: updatedboards } };
};

export default Board;
