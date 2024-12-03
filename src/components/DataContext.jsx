// DataContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  // State to store selected data (initial state can be empty or default values)
  const [selectedData, setSelectedData] = useState({
    temperature: null,
    turbidity: null,
    lat: null,
    lon: null,
    battery: null,
    altitude: null,
    speed: null,
    gpsDatetime: null,
  });

  return (
    <DataContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </DataContext.Provider>
  );
};
