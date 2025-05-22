import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

import "../src/assets/styles/games.css";
function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
