import "./css/App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
