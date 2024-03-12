import Board from "@/components/Board";
import { getBoards } from "@/app/api/board/route";
import SideBar from "@/components/Sidebar";
import Logo from "@/components/Logo";


const getBoardsData = async () => {
  const boards = await getBoards();
  return boards;
};

export default async function Home() {
  const boards = await getBoardsData();
  return (
    <>
      <main className="bg-white w-screen h-screen">
      <Logo />
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          <SideBar />
          <Board boards={...boards} />
        </div>
      </main>
    </>
  );
}
