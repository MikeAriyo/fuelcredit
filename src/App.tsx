import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopView from "./components/dashboard/DesktopView";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DesktopView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
