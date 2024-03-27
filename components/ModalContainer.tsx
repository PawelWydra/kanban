"use client";
import { useEffect } from "react";
import AddNewBoard from "./modals/AddNewBoard";
import AddNewTask from "./modals/AddNewTask";
import DeleteWarning from "./modals/DeleteWarning";
import EditTask from "./modals/EditTask";
import TaskInfo from "./modals/TaskInfo";
import EditBoard from "./modals/EditBoard";
import { useModalContext } from "@/context/ModalContext";

const ModalContainer = () => {
  const {
    addNewTask,
    addNewBoard,
    deleteWarning,
    editBoard,
    editTask,
    taskInfo,
    closeModal,
  } = useModalContext();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {addNewTask && <AddNewTask />}
      {addNewBoard && <AddNewBoard />}
      {deleteWarning.active && (
        <DeleteWarning
          type={deleteWarning.type}
          title={deleteWarning.title}
          id={deleteWarning.id}
        />
      )}
      {editBoard && <EditBoard />}
      {editTask.active && <EditTask {...editTask.task} />}
      {taskInfo.active && <TaskInfo id={taskInfo.id} />}
    </>
  );
};

export default ModalContainer;
