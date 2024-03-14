import { useState } from "react";
import TaskInfo from "./modals/TaskInfo";
import { ITask } from "@/types/index";

const Task = ({ title, description, status, subtasks }: ITask) => {
  const [showInfo, setShowInfo] = useState(false);

  const subtaskCompleted = subtasks?.filter(
    (subtask) => subtask.isCompleted === true
  );

  const handleClick = () => {
    setShowInfo(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="min-h-[88px] w-full bg-white flex flex-col justify-center shadow-lg rounded-md p-4 cursor-pointer hover:bg-slate-200"
      >
        <h2 className="heading-md text-black">{title}</h2>
        <p className="text-body-md text-gray-medium">
          {subtaskCompleted?.length} of {subtasks?.length} subtask
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
