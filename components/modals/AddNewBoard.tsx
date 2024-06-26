import { useState, ChangeEvent } from "react";
import DataInput from "./datainputs/DataInput";
import DeleteInputButton from "./datainputs/DeleteInputButton";
import { ToastContainer, toast } from "react-toastify";
import { IBoard } from "@/types";
import { useHomeContext } from "@/context/HomeContext";
import { useModalContext } from "@/context/ModalContext";

function AddNewBoard() {
  const { setAddNewBoard } = useModalContext();
  const { setBoards, setBoardSelectedId } = useHomeContext();
  const [board, setBoard] = useState<IBoard>({
    name: "",
    columns: [],
    id: "",
  });

  const handleBoardNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBoard({ ...board, name: event.target.value });
  };

  const handleAddColumn = () => {
    setBoard({
      ...board,
      columns: [...board.columns, { name: "", boardId: board.id, id: "" }],
    });
  };

  const handleDeleteColumn = (index: number) => {
    const updatedColumns = [...board.columns];
    updatedColumns.splice(index, 1);
    setBoard({ ...board, columns: updatedColumns });
  };

  const handleColumnNameChange = (index: number, columnName: string) => {
    const updatedColumns = [...board.columns];
    updatedColumns[index].name = columnName;
    setBoard({ ...board, columns: updatedColumns });
  };

  const createBoard = async () => {
    const response = await fetch("/api/board", {
      method: "POST",
      body: JSON.stringify(board),
    });

    if (response.ok) {
      const responseBody = await response.json();
      const newBoard = responseBody.board;
      setBoards((prevBoards) => [...prevBoards, newBoard]);
      setBoard({ name: "", columns: [], id: "" });
      setBoardSelectedId(newBoard.id);
      setAddNewBoard(false);
    } else {
      toast.error("Failed to create board");
    }
  };

  return (
    <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center z-20">
      <ToastContainer />
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
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-body-md text-gray-medium">Columns</h2>
          {board.columns.map((column, index) => (
            <div className="flex items-center gap-4" key={index}>
              <DataInput
                value={column.name}
                onChange={(value) => handleColumnNameChange(index, value)}
              />
              <DeleteInputButton onClick={() => handleDeleteColumn(index)} />
            </div>
          ))}
          <button
            className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl"
            onClick={handleAddColumn}
          >
            + Add New Column
          </button>
        </div>
        <button
          className="h-10 bg-purple hover:bg-purple-hover text-white text-body-md rounded-3xl"
          onClick={createBoard}
        >
          Create New Board
        </button>
      </div>
    </div>
  );
}

export default AddNewBoard;
