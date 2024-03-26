import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubtaskCheck from "@/components/modals/SubtaskCheck";
import { Subtask, Task } from "@prisma/client";
import { useModalContext } from "@/context/ModalContext";

const TaskInfo = ({ id }: { id: string }) => {
  const handleImageClick = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { setEditTask, setDeleteWarning, taskInfo } = useModalContext();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    const getTask = async () => {
      console.log(id);
      const taskData = await fetch(`/api/task/${id}`);
      const fetchedTask = await taskData.json();
      setTask(fetchedTask);
    };
    getTask();
  }, [id]);

  const subtaskCompleted = task?.subtasks.filter(
    (subtask: Subtask) => subtask.isCompleted === true
  );

  return (
    <div className="absolute top-0 left-0 z-20 h-screen w-screen bg-gray-900/60 flex justify-center items-center">
      <div className="relative bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
        <div className="flex relative">
          {isDropdownVisible && (
            <div className="absolute -right-28 top-14 bg-white p-2 flex flex-col text-body-md rounded-xl">
              <button
                onClick={() => setEditTask(true)}
                className="text-gray-medium h-12 w-40 p-2 text-left"
              >
                Edit Task
              </button>
              <button
                onClick={() => setDeleteWarning(true)}
                className="text-destructive h-12 w-40 p-2 text-left"
              >
                Delete Task
              </button>
            </div>
          )}
          <h1 className="heading-lg w-11/12">{task?.title}</h1>
          <HiOutlineDotsVertical
            size={25}
            className="cursor-pointer self-center"
            onClick={handleImageClick}
          />
        </div>

        <p className="text-body-md text-gray-medium">
          {task?.description === "" ? "add description" : task?.description}
        </p>

        <div className="w-full rounded-xl py-2">
          <p className="text-body-md text-gray-medium">
            {subtaskCompleted?.length} of {task?.subtasks.length} subtask
          </p>
          {task?.subtasks.map((subtask, index) => (
            <SubtaskCheck
              key={index}
              title={subtask.title}
              isCompleted={subtask.isCompleted}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-20">
          <p className="text-body-md text-gray-medium">Current Status</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={status} />
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
