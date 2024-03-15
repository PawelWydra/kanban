import Image from "next/image";
import useEscape from "../helpers/useEscapeFunction";
import { useState, ChangeEvent } from "react";

interface Column {
  name: string;
}

interface Board {
  name: string;
  columns: Column[];
}

function AddNewBoard() {
  const isVisible: boolean = useEscape();
  const [board, setBoard] = useState<Board>({
    name: "",
    columns: [{ name: "To do" }, { name: "Doing" }],
  });

  const handleBoardNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBoard({ ...board, name: event.target.value });
  };

  const handleAddColumn = () => {
    setBoard({
      ...board,
      columns: [...board.columns, { name: "" }],
    });
  };

  const handleDeleteColumn = (index: number) => {
    const updatedColumns = [...board.columns];
    updatedColumns.splice(index, 1);
    setBoard({ ...board, columns: updatedColumns });
  };

  const handleColumnNameChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedColumns = [...board.columns];
    updatedColumns[index].name = event.target.value;
    setBoard({ ...board, columns: updatedColumns });
  };
  console.log(board.columns)

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center z-20">
        <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg">Add New Board</h1>
          <div className="flex flex-col mt-2">
            <label className="text-body-md text-gray-medium">Name</label>
            <input
              className="ring-2 p-2 ring-gray-light rounded"
              type="text"
              placeholder="e.g. Web Design"
              value={board.name}
              onChange={handleBoardNameChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-body-md text-gray-medium">Columns</h2>
            {board.columns.map((column, index) => (
              <div className="flex items-center gap-4" key={index}>
                <input
                  className="w-11/12 p-2 ring-2 ring-gray-light rounded"
                  type="text"
                  placeholder="Add column name"
                  value={column.name}
                  onChange={(event) => handleColumnNameChange(index, event)}
                />
                <svg
                  onClick={() => handleDeleteColumn(index)}
                  className="fill-gray-medium hover:fill-destructive"
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                  </g>
                </svg>
              </div>
            ))}
            <button
              className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl"
              onClick={handleAddColumn}
            >
              + Add New Column
            </button>
          </div>
          <button className="h-10 bg-purple hover:bg-purple-hover text-white text-body-md rounded-3xl">
            Create New Board
          </button>
        </div>
      </div>
    )
  );
}

export default AddNewBoard;
