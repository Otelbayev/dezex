import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { router } from "./utils/router";
import Universal from "./components/Universal";
import "../public/fontawesome/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollContextProvider from "./context/ScrollContext";
AOS.init({
  duration: 800,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Universal />}>
            {router.map((e) => (
              <Route key={e.id} path={e.path} element={e.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ScrollContextProvider>
  </React.StrictMode>
);
