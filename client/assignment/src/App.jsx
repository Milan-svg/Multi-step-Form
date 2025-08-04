import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainForm from "./components/productForm/MainForm";
import NavBar from "./components/NavBar";
import Benefits from "./components/productForm/Step2_Benefits";
import Properties from "./components/productForm/Properties";

function App() {
  return (
    <>
      <NavBar />
      <Properties />
    </>
  );
}

export default App;
