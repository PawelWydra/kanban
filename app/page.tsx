import Board from "@/components/Board";
import SideBar from "@/components/Sidebar";
import Logo from "@/components/Logo";
import ModalContainer from "@/components/ModalContainer";
import { IBoard } from "@/types";

export default async function Home() {
  const getBoards = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/board`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  };
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
