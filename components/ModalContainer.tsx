"use client";
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
  } = useModalContext();

  return (
    <>
      {addNewTask && <AddNewTask />}
      {addNewBoard && <AddNewBoard />}
      {deleteWarning && <DeleteWarning />}
      {editBoard && <EditBoard />}
      {editTask && <EditTask />}
      {taskInfo.active && <TaskInfo id={taskInfo.id} />}
    </>
  );
};

export default ModalContainer;
