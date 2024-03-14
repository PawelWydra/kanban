"use client";

import React, { createContext, useState } from "react";
import { IBoard, HomeContextType } from "@/types";

type HomeContextProviderProps = {
  children: React.ReactNode;
};

export const HomeContext = createContext({} as HomeContextType);

export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [boardSelected, setBoardSelected] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        boards,
        setBoards,
        boardSelectedId: boardSelected,
        setBoardSelectedId: setBoardSelected,
        showSidebar,
        setShowSidebar,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
