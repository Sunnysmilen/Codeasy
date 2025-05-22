import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
