import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
