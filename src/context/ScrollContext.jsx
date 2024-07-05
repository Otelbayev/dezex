import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const ScrollContextProvider = ({ children }) => {
  const contactRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const commentRef = useRef();
  const [scroll, setScroll] = useState("");
  return (
    <ScrollContext.Provider
      value={{
        contactRef,
        aboutRef,
        serviceRef,
        commentRef,
        scroll,
        setScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
