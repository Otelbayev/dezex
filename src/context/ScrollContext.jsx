import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const ScrollContextProvider = ({ children }) => {
  const contactRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const commentRef = useRef();
  return (
    <ScrollContext.Provider
      value={{ contactRef, aboutRef, serviceRef, commentRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
