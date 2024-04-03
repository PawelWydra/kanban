import Board from "@/components/Board";
import SideBar from "@/components/Sidebar";
import Logo from "@/components/Logo";
import prisma from "@/lib/prisma";
import ModalContainer from "@/components/ModalContainer";
import { IBoard } from "@/types"; 

export const getBoards = async () => {
  const fetchedBoards = await prisma.board.findMany({
    include: {
      columns: {
        include: {
          tasks: true,
        },
      },
    },
  });
  return fetchedBoards;
};


export default async function Home() {
  const boards: IBoard[] = await getBoards();
  return (
    <>
      <ModalContainer />
      <main className="bg-white w-screen h-screen">
        <Logo />
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          <SideBar />
          <Board fetchedBoards={boards} />
        </div>
      </main>
    </>
  );
}
