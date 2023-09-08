import React from "react";
import "./index.css";
import MainPage from "./routes/MainPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Portfolio43" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
