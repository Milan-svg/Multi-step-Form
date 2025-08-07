import "./App.css";
import MainProductForm from "./pages/MainProductForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import ProductList from "./pages/ProductList";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/products/add" />} />
        <Route element={<AdminLayout />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<MainProductForm />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
