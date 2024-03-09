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
import { Check } from "lucide-react";

type subtask = {
  title: string;
  isCompleted: boolean;
}[];

const TaskInfo = ({
  title,
  description,
  status,
  subtasks,
}: {
  title: String;
  description: String;
  status: string;
  subtasks: subtask;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const subtaskCompleted = subtasks.filter(
    (subtask) => subtask.isCompleted === true
  );

  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleImageClick = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className="absolute top-0 left-0 z-50 h-screen w-screen bg-gray-900/60 flex justify-center items-center">
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
          <h1 className="heading-lg w-11/12">{title}</h1>
          <HiOutlineDotsVertical
            size={25}
            className="cursor-pointer self-center"
            onClick={handleImageClick}
          />
        </div>

        <p className="text-body-md text-gray-medium">{description}</p>

        <div className="w-full rounded-xl py-2">
          <p className="text-body-md text-gray-medium">
            {subtaskCompleted.length} of {subtasks.length} subtask
          </p>{" "}
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
              <SelectValue placeholder={status}/>
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
  );
};

export default TaskInfo;
