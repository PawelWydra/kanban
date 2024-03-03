import SideBar from "./Sidebar";

function Board() {
  return (
    <>
      <SideBar />
      <div className="w-10/12 h-full flex flex-col gap-10 justify-center items-center">
        <h3 className="heading-lg text-gray-medium">
          This board is empty. Create a new column to get started.
        </h3>
        <button className="h-12 w-48 bg-purple rounded-3xl heading-md text-white p-1">
          + Add New Task
        </button>
      </div>
    </>
  );
}

export default Board;
