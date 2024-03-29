"use client";

import React, { createContext, useContext, useState } from "react";
import { EditTask, ModalContextType } from "@/types";
import { Subtask } from "@/types";

type ModalContextProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [addNewBoard, setAddNewBoard] = useState(false);
  const [addNewTask, setAddNewTask] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState({
    type: "",
    title: "",
    id: "",
    active: false,
  });
  const [editBoard, setEditBoard] = useState(false);

  const [editTask, setEditTask] = useState<EditTask>({
    active: false,
    task: {
      title: "",
      description: "",
      subtasks: [],
      status: "",
      id: "",
      columnId: "",
    },
  });
  const [taskInfo, setTaskInfo] = useState({
    active: false,
    id: "",
  });

  const closeModal = () => {
    setAddNewBoard(false);
    setAddNewTask(false);
    setDeleteWarning({
      type: "",
      title: "",
      id: "",
      active: false,
    });
    setEditBoard(false);
    setEditTask({
      active: false,
      task: {
        title: "",
        description: "",
        subtasks: [],
        status: "",
        id: "",
        columnId: "",
      },
    });
    setTaskInfo({
      active: false,
      id: "",
    });
  };

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
        closeModal, // add closeModal to the context value
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
