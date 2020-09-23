import React, { createContext, useContext, useReducer, useState } from "react";

export const DataContext = createContext();

export const DataContextProvidr = ({ children, reducer, initialState }) => {
  const [isDeleted, setDeleted] = useState(false);
  return (
    <DataContext.Provider
      value={(isDeleted, setDeleted, useReducer(reducer, initialState))}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useStateValue = () => useContext(DataContext);
