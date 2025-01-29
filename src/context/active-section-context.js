/* eslint-disable simple-import-sort/imports */
"use client";

import React, { useState, createContext, useContext } from "react";


export const ActiveSectionContext = createContext (null);


export default function ActiveSectionContextProvider({
  children,
}) {
  const [activeSection, setActiveSection] = useState("hero");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
