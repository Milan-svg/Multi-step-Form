import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainForm from "./components/productForm/MainForm";
import NavBar from "./components/NavBar";
import Benefits from "./components/productForm/Benefits";
import Properties from "./components/productForm/Properties";
import FAQ from "./components/productForm/FAQ";
import AdminLayout from "./components/AdminLayout";
import Overview from "./components/productForm/Overview";

function App() {
  return (
    <>
      <NavBar />
      <AdminLayout>
        <MainForm />
      </AdminLayout>
    </>
  );
}

export default App;
