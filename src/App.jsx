import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Donate from "./pages/Donate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
