import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const SubtaskCheck = ({
  isCompleted,
  title,
}: {
  isCompleted: boolean;
  title: string;
}) => {
  const [isCheck, setIsCheck] = useState(isCompleted);

  const handleCheckboxClick = () => {
    setIsCheck((prevState) => !prevState);
    console.log(isCheck);
  };
  return (
    <div className="flex items-center gap-4 h-12 px-4 bg-gray-light hover:bg-purple-hover rounded-lg">
      <Checkbox onCheckedChange={handleCheckboxClick} checked={isCheck} />
      <label
        className={`text-body-md ${
          isCheck ? "opacity-60 line-through" : ""
        }`}
      >
        {title}
      </label>
    </div>
  );
};

export default SubtaskCheck;
