import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Robot from "./components/Robot";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Robot />
      <Footer />
    </>
  );
}

export default App;
