"use client"

import React, { createContext, useContext, useState } from 'react';


type HomeContextProviderProps = {
  children: React.ReactNode;
}

export const HomeContext = createContext({})

export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [boardSelected, setBoardSelected] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        boardSelected,
        setBoardSelected,
        showSidebar,
        setShowSidebar,
        darkMode,
        setDarkMode
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeStateContext = () => useContext(HomeContext);