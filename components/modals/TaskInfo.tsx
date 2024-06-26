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
import { useHomeContext } from "@/context/HomeContext";
import { IBoard } from "@/types";

const TaskInfo = ({ id }: { id: string }) => {
  const { setBoards, boards, boardSelectedId } = useHomeContext();
  const currentboard = boards.find((board) => board.id === boardSelectedId);
  const columns = currentboard?.columns;

  const handleImageClick = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { setEditTask, setDeleteWarning } = useModalContext();
  const [task, setTask] = useState<Task>();
  useEffect(() => {
    const getTask = async () => {
      const taskData = await fetch(`/api/task/${id}`);
      const fetchedTask: Task = await taskData.json();
      setTask(fetchedTask);
    };
    getTask();
  }, [id]);

  if (task === undefined) {
    return <div>No task Provided</div>;
  }

  const subtaskCompleted = task.subtasks.filter(
    (subtask: Subtask) => subtask.isCompleted === true
  );

  const toggleSubtask = (index: number) => {
    setTask((prevState) => {
      // Create a new array of subtasks with the updated subtask
      const newSubtasks = prevState!.subtasks.map((st, i) => {
        if (i === index) {
          // If this is the subtask that was clicked, toggle its isCompleted property
          return { ...st, isCompleted: !st.isCompleted };
        } else {
          // Otherwise, return the subtask unchanged
          return st;
        }
      });

      // Return a new task object with the updated subtasks
      const updatedTask = { ...prevState!, subtasks: newSubtasks };
      updateSubtask(updatedTask);
      return updatedTask;
    });
  };

  const updateSubtask = async (updatedTask: Task) => {
    console.log(updatedTask);
    const response = await fetch("/api/task", {
      method: "PUT",
      body: JSON.stringify(updatedTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Create newBoards
    const newBoards = boards.map((board) => {
      if (board.id === boardSelectedId) {
        return {
          ...board,
          columns: board.columns.map((column) => {
            if (column.id === updatedTask.columnId) {
              return {
                ...column,
                tasks: column.tasks!.map((task) =>
                  task.id === updatedTask.id ? updatedTask : task
                ),
              };
            }
            return column;
          }),
        };
      }
      return board;
    });

    // Update the boards state
    setBoards(newBoards as IBoard[]);
  };

  return (
    <div className="absolute top-0 left-0 z-20 h-screen w-screen bg-gray-900/60 flex justify-center items-center">
      <div className="relative bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
        <div className="flex relative">
          {isDropdownVisible && (
            <div className="absolute -right-28 top-14 bg-white p-2 flex flex-col text-body-md rounded-xl">
              <button
                onClick={() => setEditTask({ active: true, task: task })}
                className="text-gray-medium h-12 w-40 p-2 text-left"
              >
                Edit Task
              </button>
              <button
                onClick={() =>
                  setDeleteWarning({
                    id: id,
                    type: "task",
                    title: task.title,
                    active: true,
                  })
                }
                className="text-destructive h-12 w-40 p-2 text-left"
              >
                Delete Task
              </button>
            </div>
          )}
          <h1 className="heading-lg w-11/12">{task.title}</h1>
          <HiOutlineDotsVertical
            size={25}
            className="cursor-pointer self-center"
            onClick={handleImageClick}
          />
        </div>

        <p className="text-body-md text-gray-medium">
          {task?.description === "" ? "add description" : task.description}
        </p>

        <div className="w-full rounded-xl py-2">
          <p className="text-body-md text-gray-medium">
            {subtaskCompleted.length} of {task.subtasks.length} subtask
          </p>
          {task?.subtasks.map((subtask, index) => (
            <SubtaskCheck
              key={index}
              title={subtask.title}
              isCompleted={subtask.isCompleted}
              updateState={() => {
                toggleSubtask(index);
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-20">
          <p className="text-body-md text-gray-medium">Current Status</p>
          <Select
            onValueChange={(value) => {
              setTask({
                ...task,
                columnId: value,
                status: columns?.find((column) => column.id === value)?.name!,
              });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={task.status} />
            </SelectTrigger>
            <SelectContent>
              {columns?.map((column) => (
                <SelectItem key={column.id} value={column.id}>
                  {column.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
