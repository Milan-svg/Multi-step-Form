import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainForm from "./components/productForm/MainForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <MainForm />
    </>
  );
}

export default App;
