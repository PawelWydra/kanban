import useEscape from "../helpers/useEscapeFunction";
import { useState } from "react";
import DataInput from "./datainputs/DataInput";
import DeleteInputButton from "./datainputs/DeleteInputButton";
import { useHomeContext } from "@/context/HomeContext";

function EditBoard() {
  const isVisible: boolean = useEscape();
  const { boardSelectedId, boards } = useHomeContext();
  let completeBoardSelected = boards.find(
    (board) => board.id === boardSelectedId
  );
  const [currentBoard, setCurrentBoard] = useState(completeBoardSelected);

  const handleColumnNameChange = (index: number, value: string) => {
    const updatedColumns = [...currentBoard?.columns!];
    updatedColumns[index].name = value;
    setCurrentBoard((prev) => ({
      ...prev!,
      columns: updatedColumns,
    }));
  };

  const handleDeleteColumn = (index: number) => {
    if (!currentBoard) return;
    const updatedColumns = currentBoard.columns.filter(
      (column, columnIndex) => columnIndex !== index
    );
    setCurrentBoard((prev) => ({
      ...prev!,
      columns: updatedColumns,
    }));
  };

  const handleAddColumn = () => {
    if (!currentBoard) return;

    // Check if there's an existing column with an empty name
    const hasEmptyColumnName = currentBoard.columns.some(
      (column) => column.name.trim() === ""
    );

    if (hasEmptyColumnName) {
      alert("Please fill in all column names before adding a new one.");
      return;
    }

    setCurrentBoard((prev) => ({
      ...prev!,
      columns: [...prev!.columns, { id: "", boardId: "", name: "" }],
    }));
  };
  const handleBoardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentBoard((prev) => ({
      ...prev!,
      name: e.target.value,
    }));
  };

  const handleSaveChanges = () => {
    fetch("/api/board", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentBoard),
    })
      .then((response) => {
        if (response.ok) {
          alert("Board updated successfully");
        } else {
          alert("An error occurred while updating the board");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center z-20">
        <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg">Edit Board</h1>
          <div className="flex flex-col mt-2">
            <label className="text-body-md text-gray-medium">Name</label>
            <input
              className="ring-2 p-2 ring-gray-light rounded"
              type="text"
              placeholder="e.g. Web Design"
              value={currentBoard?.name}
              onChange={handleBoardNameChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-body-md text-gray-medium">Columns</h2>
            {currentBoard?.columns.map((column, index) => (
              <div className="flex items-center gap-4" key={index}>
                <DataInput
                  error={column.name.trim() === ""}
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
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    )
  );
}

export default EditBoard;
