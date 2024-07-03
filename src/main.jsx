import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { router } from "./utils/router";
import Universal from "./components/Universal";
import "../public/fontawesome/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Universal />}>
          {router.map((e) => (
            <Route key={e.id} path={e.path} element={e.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
