import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useEscape from "../helpers/useEscapeFunction";
import { useState, ChangeEvent } from "react";
import DataInput from "./datainputs/DataInput";
import DeleteInputButton from "./datainputs/DeleteInputButton";
import { ITask, Subtask } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function AddNewTask() {
  const isVisible: boolean = useEscape();
  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    subtasks: [],
    status: "",
    id: uuidv4(),
  });

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
    console.log(updatedSubtasks);
  };

  const handleCreateTask = async () => {
    const response = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(task),
    });

    if (response.ok) {
      toast.success("Task created successfully!");
      setTask({
        title: "",
        description: "",
        subtasks: [],
        status: "",
        id: "",
      });
    } else {
      toast.error("Failed to create task");
    }
  };

  return (
    isVisible && (
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
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={task.status}></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="To do"
                  onClick={() => setTask({ ...task, status: "To do" })}
                >
                  To do
                </SelectItem>
                <SelectItem
                  value="Doing"
                  onClick={() => setTask({ ...task, status: "Doing" })}
                >
                  Doing
                </SelectItem>
                <SelectItem
                  value="Done"
                  onClick={() => setTask({ ...task, status: "Done" })}
                >
                  Done
                </SelectItem>
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
    )
  );
}

export default AddNewTask;
