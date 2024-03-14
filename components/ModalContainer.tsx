"use client"

import { useState } from "react"
import AddNewBoard from "./modals/AddNewBoard"
import AddNewTask from "./modals/AddNewTask"
import DeleteWarning from "./modals/DeleteWarning"
import EditTask from "./modals/EditTask"
import NewColumn from "./modals/NewColumn"
import TaskInfo from "./modals/TaskInfo"


const ModalContainer = () => {
  return (
    <>
    <AddNewBoard/>
    <AddNewTask/>
    <DeleteWarning/>
    <EditBoard/>
    <EditTask/>
    <NewColumn/>
    <TaskInfo/>
    </>
  )
}

export default ModalContainer