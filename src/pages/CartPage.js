import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem } from "../actions/cartActions";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemsArray = Object.values(cart.items);

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>

      <div className="cart-summary">
        <div><strong>Total items</strong>: {cart.totalItems}</div>
        <div><strong>Total cost</strong>: ${cart.totalPrice.toFixed(2)}</div>
      </div>

      {itemsArray.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-items">
          {itemsArray.map(({ product, qty }) => (
            <div key={product.id} className="cart-item">
              <img src={product.thumbnail} alt={product.name} className="cart-thumb" />
              <div className="cart-item-info">
                <h4>{product.name}</h4>
                <div>Unit price: ${product.price.toFixed(2)}</div>
                <div className="qty-controls">
                  <button className="btn small" onClick={() => dispatch(decrementItem(product.id))}>-</button>
                  <span className="qty">{qty}</span>
                  <button className="btn small" onClick={() => dispatch(incrementItem(product.id))}>+</button>
                </div>
              </div>
              <div className="cart-item-actions">
                <button className="btn danger" onClick={() => dispatch(removeItem(product.id))}>Delete</button>
              </div>
            </div>
          ))}

          <div className="cart-actions">
            <button className="btn primary" onClick={() => alert("Coming Soon")}>Checkout</button>
            <Link to="/products" className="btn">Continue Shopping</Link>
          </div>
        </div>
      )}
    </section>
  );
}
