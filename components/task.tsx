import { useState } from "react";
import TaskInfo from "./TaskInfo";

type subtask = {
  title: string;
  isCompleted: boolean;
}[];

const Task = ({
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
  const [showInfo, setShowInfo] = useState(false);

  const subtaskCompleted = subtasks.filter(
    (subtask) => subtask.isCompleted === true
  );

  const handleClick = () => {
    setShowInfo(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="min-h-[88px] w-full bg-white flex flex-col justify-center shadow-lg rounded-md p-4 cursor-pointer"
      >
        <h2 className="heading-md text-black">{title}</h2>
        <p className="text-body-md text-gray-medium">
          {subtaskCompleted.length} of {subtasks.length} subtask
        </p>
      </div>
      {showInfo && (
        <TaskInfo
          title={title}
          description={description}
          subtasks={subtasks}
          status={status}
        />
      )}
    </>
  );
};

export default Task;
