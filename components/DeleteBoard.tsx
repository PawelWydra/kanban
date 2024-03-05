import { useState } from "react";
import Image from "next/image";
import Cross from "@/assets/icon-cross.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useEscape from "./helpers/useEscapeFunction";

function DeleteBoard() {
  const isVisible: boolean = useEscape();

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center">
        <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg text-destructive">Delete this board?</h1>
          <p className="text-body-md text-gray-medium">
            Are you sure you want to delete the ‘Platform Launch’ board? This
            action will remove all columns and tasks and cannot be reversed.
          </p>
          <div className="flex gap-4 *:flex-1">
            <button className="h-10 bg-destructive text-white text-body-md rounded-3xl">
              Delete
            </button>
            <button className="h-10 bg-gray-light text-purple text-body-md rounded-3xl">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

DeleteBoard.propTypes = {};

export default DeleteBoard;
