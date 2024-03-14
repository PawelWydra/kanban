"use client";

import React, { createContext, useState } from "react";
import { IBoard, ModalContextType } from "@/types";

type ModalContextProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext({} as ModalContextType);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [addNewBoard, setAddNewBoard] = useState(false);
  const [addNewTask, setAddNewTask] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [editBoard, setEditBoard] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [taskInfo, setTaskInfo] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        addNewBoard,
        addNewTask,
        deleteWarning,
        editBoard,
        editTask,
        taskInfo,
        setAddNewBoard,
        setAddNewTask,
        setDeleteWarning,
        setEditBoard,
        setEditTask,
        setTaskInfo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
