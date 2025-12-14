import React, { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  // group products by category
  const categories = [...new Set(productsData.map((p) => p.category))];

  return (
    <section className="product-list-page">
      <h2>Shop Plants</h2>
      <div className="categories">
        {categories.map((cat) => (
          <div key={cat} className="category-block">
            <h3 className="category-title">{cat}</h3>
            <div className="product-grid">
              {productsData
                .filter((p) => p.category === cat)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
