import React, { createContext, useContext, useState } from 'react';

const RegisterModalContext = createContext();

export const RegisterModalProvider = ({ children }) => {
  const [openRegister , setOpenRegister] = useState(false);

  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);

  return (
    <RegisterModalContext.Provider value={{ openRegister, handleRegisterOpen, handleRegisterClose, setOpenRegister }}>
      {children}
    </RegisterModalContext.Provider>
  );
};

export const useRegisterModal = () => useContext(RegisterModalContext);
