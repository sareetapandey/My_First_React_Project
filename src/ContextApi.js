import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    detail: {},
    handleAddToCart: [],
  });

  const updateState = (newState) => {
    setAppState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <AppContext.Provider value={{ appState, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
