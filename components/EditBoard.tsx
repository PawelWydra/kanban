"use client";

import Image from "next/image";
import Cross from "@/assets/icon-cross.svg";
import useEscape from "./helpers/useEscapeFunction";

function EditBoard() {
  const isVisible: boolean = useEscape();

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center">
        <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg">Add New Board</h1>
          <div className="flex flex-col mt-2">
            <label className="text-body-md text-gray-medium">Board Name</label>
            <input
              className="ring-2 p-2 ring-gray-light rounded"
              type="text"
              placeholder="e.g. Web Design"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-body-md text-gray-medium">Board Columns</h2>
            <div className="flex items-center">
              <input
                className="w-11/12 p-2 ring-2 ring-gray-light rounded"
                type="text"
                placeholder="Todo"
              />
              <Image className="ml-auto" src={Cross} alt="delete subtask" />
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-11/12 p-2 ring-2 ring-gray-light rounded"
                type="text"
                placeholder="Doing"
              />
              <Image
                className="ml-auto hover:cursor-pointer"
                src={Cross}
                alt="delete subtask"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-11/12 p-2 ring-2 ring-gray-light rounded"
                type="text"
                placeholder="Done"
              />
              <Image
                className="ml-auto hover:cursor-pointer"
                src={Cross}
                alt="delete subtask"
              />
            </div>
            <button className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl">
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

EditBoard.propTypes = {};

export default EditBoard;
