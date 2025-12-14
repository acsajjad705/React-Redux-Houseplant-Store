import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-title">GreenHouse Plants</h1>
          </Link>
        </div>

        <nav className="nav">
          <Link to="/products" className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}>
            Products
          </Link>
          <Link to="/cart" className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`}>
            Cart
          </Link>
        </nav>

        <div className="cart-icon">
          <Link to="/cart" className="cart-link" aria-label="Shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="cart-svg">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="20" r="1" fill="#333"/>
              <circle cx="18" cy="20" r="1" fill="#333"/>
            </svg>
            <span className="cart-count" data-testid="cart-count">{cart.totalItems}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
