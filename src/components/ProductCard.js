import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = !!cartItems[product.id];
  const [disabled, setDisabled] = useState(isInCart);

  useEffect(() => {
    setDisabled(!!cartItems[product.id]);
  }, [cartItems, product.id]);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setDisabled(true);
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} className="product-thumb" />
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="btn add-btn" onClick={handleAdd} disabled={disabled}>
          {disabled ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
