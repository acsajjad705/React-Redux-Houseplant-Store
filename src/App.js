import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
