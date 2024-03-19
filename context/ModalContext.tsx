"use client";

import React, { createContext, useContext, useState } from "react";
import { IBoard, ModalContextType } from "@/types";

type ModalContextProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextType | null>(null);

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

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used with a ModalContextProvider");
  }
  return context;
};
