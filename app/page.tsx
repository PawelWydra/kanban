import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      <main className="bg-white w-screen h-screen">
        <div className="h-[calc(100vh-6rem)] bg-[#E4EBFA] flex">
          <Board />
        </div>
      </main>
    </>
  );
}
