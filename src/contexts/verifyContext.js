import React, { createContext, useContext, useState } from 'react';

const LoginVerifyContext = createContext();

export const LoginVerifyProvider = ({ children }) => {
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [verifyToken, setVerifyToken] = useState(null); // ✅ store token

  const openVerify = (token) => {
    setVerifyToken(token); // store token
    setVerifyOpen(true);
  };

  const closeVerify = () => {
    setVerifyOpen(false);
    setVerifyToken(null); // clear token
  };

  return (
    <LoginVerifyContext.Provider value={{ verifyOpen, openVerify, closeVerify, verifyToken, setVerifyOpen}}>
      {children}
    </LoginVerifyContext.Provider>
  );
};

export const useVerifyModal = () => useContext(LoginVerifyContext);
