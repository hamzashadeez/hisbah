
import "./App.css";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Donate from "./pages/Donate";
import JoinCommunity from "./pages/JoinCommunity";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/join" element={<JoinCommunity />} />
    </Routes>
  );
}

export default App;
