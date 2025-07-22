import React, { createContext, useContext, useState } from 'react';

const LoginModalContext = createContext();

export const LoginModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openLogin = () => setOpen(true);
  const closeLogin = () => setOpen(false);

  return (
    <LoginModalContext.Provider value={{ open, openLogin, closeLogin, setOpen }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModal = () => useContext(LoginModalContext);
