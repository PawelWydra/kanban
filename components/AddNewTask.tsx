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

function AddNewTask() {
  const isVisible: boolean = useEscape();

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center">
        <div className="bg-white w-[30rem] h-[42.1rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg">Add New Task</h1>
          <div className="flex flex-col mt-2">
            <label className="text-body-md text-gray-medium">Title</label>
            <input
              className="ring-2 p-2 ring-gray-light hover:ring-purple  rounded"
              type="text"
              placeholder="e.g. Take coffee break"
            />
          </div>

          <div className="w-full rounded-xl py-2 flex flex-col">
            <label className="text-body-md text-gray-medium">Description</label>
            <textarea
              rows={3}
              className="w-full p-2 ring-2 ring-gray-light  hover:ring-purple rounded resize-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-body-md text-gray-medium">Subtask</h2>
            <div className="flex items-center">
              <input
                className="w-11/12 p-2 ring-2 ring-gray-light  hover:ring-purple focus:ring-purple rounded"
                type="text"
                placeholder="e.g. Make coffee"
              />
              <Image className="ml-auto" src={Cross} alt="delete subtask" />
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-11/12 p-2 ring-2 ring-gray-light  hover:ring-purple focus:ring-purple rounded"
                type="text"
                placeholder="e.g. Drink coffee & smile"
              />
              <Image
                className="ml-auto hover:cursor-pointer"
                src={Cross}
                alt="delete subtask"
              />
            </div>
            <button className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl">
              + Add New Subtask
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-body-md text-gray-medium">Status</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Doing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">To do</SelectItem>
                <SelectItem value="dark">Doing</SelectItem>
                <SelectItem value="system">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button className="h-10 bg-purple hover:bg-purple-hover text-white text-body-md rounded-3xl">
            Create Task
          </button>
        </div>
      </div>
    )
  );
}

AddNewTask.propTypes = {};

export default AddNewTask;
