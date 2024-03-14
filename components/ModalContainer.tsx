"use client";

import { useState } from "react";
import AddNewBoard from "./modals/AddNewBoard";
import AddNewTask from "./modals/AddNewTask";
import DeleteWarning from "./modals/DeleteWarning";
import EditTask from "./modals/EditTask";
import NewColumn from "./NewColumn";
import TaskInfo from "./modals/TaskInfo";
import EditBoard from "./modals/EditBoard";

const ModalContainer = () => {
  return (
    <>
      <AddNewBoard />
      <AddNewTask />
      <DeleteWarning />
      <EditBoard />
      <EditTask />
      <TaskInfo />
    </>
  );
};

export default ModalContainer;
