import { useContext } from "react";
import { ITask } from "@/types/index";
import { ModalContext, useModalContext } from "@/context/ModalContext";

const Task = ({ title, description, status, subtasks, id }: ITask) => {
  const { setTaskInfo } = useModalContext();
  if (!subtasks) {
    subtasks = [];
  }
  const subtaskCompleted = subtasks.filter(
    (subtask) => subtask.isCompleted === true
  );

  return (
    <>
      <div
        onClick={() => setTaskInfo({ active: true, id: id })}
        className="min-h-[88px] w-full bg-white flex flex-col justify-center shadow-lg rounded-md p-4 cursor-pointer hover:bg-slate-200"
      >
        <h2 className="heading-md text-black">{title}</h2>
        <p className="text-body-md text-gray-medium">
          {subtaskCompleted.length} of {subtasks.length} subtask
        </p>
      </div>
    </>
  );
};

export default Task;
