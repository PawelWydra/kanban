import useEscape from "../helpers/useEscapeFunction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Task } from "@prisma/client";
import DeleteInputButton from "./datainputs/DeleteInputButton";
import DataInput from "./datainputs/DataInput";
import { useState } from "react";
import { useHomeContext } from "@/context/HomeContext";
import { ToastContainer, toast } from "react-toastify";
import { useModalContext } from "@/context/ModalContext";
import { IBoard } from "@/types";

function EditTask(propTask: Task) {
  const isVisible: boolean = useEscape();
  const [task, setTask] = useState<Task>(propTask);
  const { boards, boardSelectedId, setBoards } = useHomeContext();
  const { setEditTask, editTask } = useModalContext();

  const currentboard = boards.find((board) => board.id === boardSelectedId);
  const columns = currentboard?.columns;

  const handleDeleteSubtask = (index: number) => {
    const updatedSubtasks = [...(task.subtasks || [])];
    updatedSubtasks.splice(index, 1);
    setTask({ ...task, subtasks: updatedSubtasks });
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const updatedSubtasks = [...(task.subtasks || [])];
    updatedSubtasks[index].title = value;
    setTask({ ...task, subtasks: updatedSubtasks });
  };

  const handleAddSubtask = () => {
    setTask({
      ...task,
      subtasks: [...task.subtasks!, { title: "", isCompleted: false }],
    });
  };

  const updateTask = async () => {
    const response = await fetch(`/api/task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      toast.success("Task edited successfully!");
      setEditTask({ ...editTask, active: false });
      const newBoards = boards.map((board) => {
        if (board.id === boardSelectedId) {
          const newColumns = board.columns.map((column) => {
            if (column.id === task.columnId) {
              // Add the task to the new column
              return {
                ...column,
                tasks: [...(column.tasks || []), task as Task],
              };
            } else if (column.tasks!.some((t) => t.id === task.id)) {
              // Remove the task from the old column
              return {
                ...column,
                tasks: column.tasks!.filter((t) => t.id !== task.id),
              };
            }
            return column;
          });
          return { ...board, columns: newColumns };
        }
        return board;
      });
      setBoards(newBoards as IBoard[]);
    } else {
      toast.error("An error occurred while updating the task.");
    }
  };

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center z-30">
        <ToastContainer />
        <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg">Edit Task</h1>
          <div className="flex flex-col mt-2">
            <input
              className="ring-2 p-2 ring-gray-light rounded"
              type="text"
              value={task.title}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
            />
          </div>

          <div className="w-full rounded-xl py-2 flex flex-col">
            <label className="text-body-md text-gray-medium">Description</label>
            <textarea
              rows={3}
              className="w-full p-2 ring-2 ring-gray-light rounded resize-none"
              value={task.description}
              onChange={(e) => {
                setTask({ ...task, description: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-body-md text-gray-medium">Subtask</h2>
            <div className="flex flex-col items-center gap-2">
              {task.subtasks!.map((subtask, index) => (
                <div className="flex items-center gap-4 w-full" key={index}>
                  <DataInput
                    value={subtask.title}
                    onChange={(e) => handleSubtaskChange(index, e)}
                  />
                  <DeleteInputButton
                    onClick={() => handleDeleteSubtask(index)}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleAddSubtask}
              className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl"
            >
              + Add New Subtask
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-body-md text-gray-medium">Status</p>
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
          <button
            onClick={updateTask}
            className="h-10 bg-purple hover:bg-purple-hover text-white text-body-md rounded-3xl"
          >
            Edit Task
          </button>
        </div>
      </div>
    )
  );
}

EditTask.propTypes = {};

export default EditTask;
