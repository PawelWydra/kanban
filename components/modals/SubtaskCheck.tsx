import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Subtask } from "@prisma/client";

type SubtaskCheckProps = {
  isCompleted: boolean;
  title: string;
  updateState: () => void;
};

const SubtaskCheck = ({
  isCompleted,
  title,
  updateState,
}: SubtaskCheckProps) => {
  const [isCheck, setIsCheck] = useState(isCompleted);

  const handleCheckboxClick = () => {
    setIsCheck((prevState) => !prevState);
    updateState();
  };
  return (
    <div className="flex items-center gap-4 h-12 px-4 bg-gray-light hover:bg-purple-hover rounded-lg">
      <Checkbox onCheckedChange={handleCheckboxClick} checked={isCheck} />
      <label
        className={`text-body-md ${isCheck ? "opacity-60 line-through" : ""}`}
      >
        {title}
      </label>
    </div>
  );
};

export default SubtaskCheck;
