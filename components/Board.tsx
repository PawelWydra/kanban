import SideBar from "./Sidebar";

function Board() {
  return (
    <>
      <SideBar />
      <div className="w-10/12 h-full flex flex-col gap-6 justify-center items-center">
        <h3 className="text-md ">
          This board is empty. Create a new column to get started
        </h3>
        <button className="h-12 w-48 bg-violet-600 rounded-3xl heading-s text-white p-1">
          + Add New Task
        </button>
      </div>
    </>
  );
}

export default Board;
