import Board from "@/components/Board";
import SideBar from "@/components/Sidebar";
import Logo from "@/components/Logo";
import prisma from "@/lib/prisma";
import ModalContainer from "@/components/ModalContainer";

export const getBoards = async () => {
  const boards = await prisma.board.findMany({
    include: {
      columns: {
        include: {
          tasks: true,
        },
      },
    },
  });
  return boards;
};

export default async function Home() {
  const boards = await getBoards();
  return (
    <>
      <ModalContainer />
      <main className="bg-white w-screen h-screen">
        <Logo />
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          <SideBar />
          <Board boards={boards} />
        </div>
      </main>
    </>
  );
}
