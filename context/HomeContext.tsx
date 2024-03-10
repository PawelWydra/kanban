"use client";

import React, { createContext, useContext, useState } from "react";
import { Board, HomeContextType } from "@/types";

type HomeContextProviderProps = {
  children: React.ReactNode;
};

export const HomeContext = createContext({} as HomeContextType);

export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [boardSelected, setBoardSelected] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        boards,
        setBoards,
        boardSelected,
        setBoardSelected,
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

