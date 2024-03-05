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

const TaskPopUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState);
    console.log("Checkbox");
  };
  const isVisible: boolean = useEscape();

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center">
        <div className="bg-white w-[30rem] h-[32.7rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg">
            Research pricing points of various competitors and trial different
            business models
          </h1>
          <p className="text-body-md text-gray-medium">
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>

          <div className="w-full rounded-xl py-2">
            <p className="text-body-md text-gray-medium mb-4">
              Subtask (2 of 3)
            </p>
            <div className="flex items-center gap-4 h-12 px-4 bg-gray-light rounded-lg">
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
          <div className="flex flex-col gap-1">
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

export default TaskPopUp;
