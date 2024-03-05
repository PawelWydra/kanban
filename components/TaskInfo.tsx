import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useEscape from "./helpers/useEscapeFunction";

const TaskInfo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleImageClick = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const isVisible: boolean = useEscape();

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center">
        <div className="relative bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <div className="flex relative">
            {isDropdownVisible && (
              <div className="absolute -right-28 top-14 bg-white p-2 flex flex-col text-body-md rounded-xl">
                <button className="text-gray-medium h-12 w-40 p-2 text-left">
                  Edit Task
                </button>
                <button className="text-destructive h-12 w-40 p-2 text-left">
                  Delete Task
                </button>
              </div>
            )}
            <h1 className="heading-lg w-11/12">
              Research pricing points of various competitors and trial different
              business models
            </h1>
            <HiOutlineDotsVertical
              size={25}
              className="cursor-pointer self-center"
              onClick={handleImageClick}
            />
          </div>

          <p className="text-body-md text-gray-medium">
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>

          <div className="w-full rounded-xl py-2">
            <p className="text-body-md text-gray-medium mb-4">
              Subtask (2 of 3)
            </p>
            <div className="flex items-center gap-4 h-12 px-4 bg-gray-light hover:bg-purple-hover rounded-lg">
              <Checkbox onCheckedChange={handleCheckboxClick} />
              <label
                className={`text-body-md ${
                  isChecked ? "opacity-60 line-through" : ""
                }`}
              >
                Research competitor pricing and business models
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-20">
            <p className="text-body-md text-gray-medium">Current Status</p>
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
        </div>
      </div>
    )
  );
};

export default TaskInfo;
