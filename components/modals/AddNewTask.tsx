import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, ChangeEvent, useEffect } from "react";
import DataInput from "./datainputs/DataInput";
import DeleteInputButton from "./datainputs/DeleteInputButton";
import { IBoard, ITask, Subtask } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import { useHomeContext } from "@/context/HomeContext";
import { useModalContext } from "@/context/ModalContext";

function AddNewTask() {
  const { setAddNewTask } = useModalContext();
  const { boards, boardSelectedId, setBoards } = useHomeContext();
  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    status: "",
    subtasks: [],
    id: "",
    columnId: "",
  });

  const currentboard = boards.find((board) => board.id === boardSelectedId);
  const columns = currentboard?.columns;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setTask({ ...task, [field]: event.target.value });
  };

  const handleAddSubtask = () => {
    setTask({
      ...task,
      subtasks: [...task.subtasks!, { title: "", isCompleted: false }],
    });
  };

  const handleDeleteSubtask = (index: number) => {
    const updatedSubtasks = [...(task.subtasks || [])] as Subtask[];
    updatedSubtasks.splice(index, 1);
    setTask({ ...task, subtasks: updatedSubtasks });
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const updatedSubtasks = [...(task.subtasks || [])] as Subtask[];
    updatedSubtasks[index].title = value;
    setTask({ ...task, subtasks: updatedSubtasks });
  };

  const handleCreateTask = async () => {
    const response = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(task),
    });

    if (response.ok) {
      toast.success("Task created successfully!");
      const data = await response.json();
      setTask(data.task as ITask);
      console.log(data.task, task);
      const newBoards = boards.map((board) => {
        if (board.id === boardSelectedId) {
          const newColumns = board.columns.map((column) => {
            if (column.id === task.columnId) {
              return {
                ...column,
                tasks: [...(column.tasks || []), data.task],
              };
            }
            return column;
          });
          return { ...board, columns: newColumns };
        }
        return board;
      });
      setBoards(newBoards);
    } else {
      // Handle error
      toast.error("An error occurred while creating the task.");
    }
  };

  return (
    <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center z-20">
      <ToastContainer />
      <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
        <h1 className="heading-lg">Add New Task</h1>
        <div className="flex flex-col mt-2">
          <label className="text-body-md text-gray-medium">Title</label>
          <input
            className="ring-2 p-2 ring-gray-light hover:ring-purple rounded"
            type="text"
            placeholder="e.g. Take coffee break"
            value={task.title}
            onChange={(e) => handleInputChange(e, "title")}
          />
        </div>

        <div className="w-full rounded-xl py-2 flex flex-col">
          <label className="text-body-md text-gray-medium">Description</label>
          <textarea
            rows={3}
            className="w-full p-2 ring-2 ring-gray-light hover:ring-purple rounded resize-none"
            value={task.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-body-md text-gray-medium">Subtask</h2>
          {task.subtasks!.map((subtask, index) => (
            <div className="flex items-center gap-4" key={index}>
              <DataInput
                value={subtask.title}
                onChange={(e) => handleSubtaskChange(index, e)}
              />
              <DeleteInputButton onClick={() => handleDeleteSubtask(index)} />
            </div>
          ))}
          <button
            className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl"
            onClick={handleAddSubtask}
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
              <SelectValue />
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
          className="h-10 bg-purple hover:bg-purple-hover text-white text-body-md rounded-3xl"
          onClick={handleCreateTask}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default AddNewTask;
