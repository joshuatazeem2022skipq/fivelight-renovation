import React, { createContext, useContext, useEffect, useState } from "react";

const ActiveTabContext = createContext();

export const useActiveTab = () => useContext(ActiveTabContext);

export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "/"
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem("activeTab");
    };
  }, []);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};
