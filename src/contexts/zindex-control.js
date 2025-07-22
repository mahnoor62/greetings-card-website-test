import React, { createContext, useContext, useState } from 'react';

const ZindexContext = createContext();

export const ZindexProvider = ({ children }) => {
  const [gifZIndex, setGifZIndex] = useState(1300);


  return (
    <ZindexContext.Provider value={{ gifZIndex,setGifZIndex }}>
      {children}
    </ZindexContext.Provider>
  );
};

export const useZindexModal = () => useContext(ZindexContext);
