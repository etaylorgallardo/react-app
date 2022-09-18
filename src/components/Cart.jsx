import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ItemCart from "./ItemCart";
import UserForm from "./userForm";
import './Cart.css'

export const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: ${totalPrice()}</p>
      <UserForm cart={cart} />
    </div>
  );
};

export default Cart;
