import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOPen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSideBarOPen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOPen(false);
  };
  return <AppContext.Provider value={{ isSideBarOpen, openSidebar, closeSidebar, pageId, setPageId }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
