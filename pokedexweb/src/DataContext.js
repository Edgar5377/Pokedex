import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const updateApiData = (data) => {
    setApiData(data);
  };

  return (
    <DataContext.Provider value={{ apiData, updateApiData }}>
      {children}
    </DataContext.Provider>
  );
};
