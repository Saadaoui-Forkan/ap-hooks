import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from "./components/Products";
import Search from "./components/Search";
import { products as initialProducts } from "./data";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const addNewProduct = (product) => {
    if (!product.title || !product.url || !product.description || !product.price) return;

    setProducts((prev) => [
      ...prev,
      { ...product, id: crypto.randomUUID() }
    ]);
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h1 className="text-center my-4">🛒 Product Manager</h1>
      <Search setSearchItem={setSearchTerm} />
      <Products data={filteredProducts} addNewProduct={addNewProduct} />
    </div>
  );
}

export default App;