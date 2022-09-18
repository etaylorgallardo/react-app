import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export const CardWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <div>
      <i className="bi bi-cart3"></i>
      <span>{totalProducts() || ""}</span>
    </div>
  );
};

export default CardWidget;
