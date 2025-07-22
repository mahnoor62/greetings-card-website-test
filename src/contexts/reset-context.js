import React, { createContext, useState, useContext } from 'react';

const ResetContext = createContext();

export const ResetProvider = ({ children }) => {
  const [resetOpen, setResetOpen] = useState(false);

  const handleOpenReset = () => {
    setResetOpen(true);
  };

  const handleCloseReset = () => {
    setResetOpen(false);
  };

  return (
    <ResetContext.Provider value={{ resetOpen, handleOpenReset, handleCloseReset, setResetOpen }}>
      {children}
    </ResetContext.Provider>
  );
};

export const useResetModal  = () => useContext(ResetContext);
