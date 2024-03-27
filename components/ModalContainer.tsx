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
