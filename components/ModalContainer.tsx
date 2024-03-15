"use client";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import AddNewBoard from "./modals/AddNewBoard";
import AddNewTask from "./modals/AddNewTask";
import DeleteWarning from "./modals/DeleteWarning";
import EditTask from "./modals/EditTask";
import TaskInfo from "./modals/TaskInfo";
import EditBoard from "./modals/EditBoard";

const ModalContainer = () => {
  const useModalStateContext = () => useContext(ModalContext);
  const {
    addNewTask,
    addNewBoard,
    deleteWarning,
    editBoard,
    editTask,
    taskInfo,
  } = useModalStateContext();

  return (
    <>
      {addNewTask && <AddNewTask />}
      {addNewBoard && <AddNewBoard />}
      {deleteWarning && <DeleteWarning />}
      {editBoard && <EditBoard />}
      {editTask && <EditTask />}
      {taskInfo && <TaskInfo />}
    </>
  );
};

export default ModalContainer;
