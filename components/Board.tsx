import NewColumn from "./NewCoulmn";
import SideBar from "./Sidebar";
import Column from "./column";

function Board() {
  return (
    <>
      {/* <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
        <h3 className="heading-lg text-gray-medium">
          This board is empty. Create a new column to get started.
        </h3>
        <button className="h-12 w-48 bg-purple rounded-3xl heading-md text-white p-1">
          + Add New Column
        </button>
      </div> */}
      <div className="flex gap-6 w-10/12 h-full justify-around py-10 px-4">
        <Column />
        <Column />
        <Column />
        <NewColumn/>
      </div>
    </>
  );
}

export default Board;
