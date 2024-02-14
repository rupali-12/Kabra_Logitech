import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/cartlist" element={<CartList />} />
      </Routes>
    </Router>
  );
}

export default App;
