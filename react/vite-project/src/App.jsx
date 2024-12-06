import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/show/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
