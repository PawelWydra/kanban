"use client";

import React, { createContext, useContext, useState } from "react";
import { IBoard, HomeContextType } from "@/types";

type HomeContextProviderProps = {
  children: React.ReactNode;
};

export const HomeContext = createContext<HomeContextType | null>(null);

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
export const useHomeStateContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error(
      "useHomeStateContext must be used with a HomeContextProvider"
    );
  }
  return context;
};
