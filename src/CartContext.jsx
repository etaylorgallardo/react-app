import React, {useContext, useState} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (Item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== Item.id);
        newCart.push({ ...Item, quiantity: newQuantity});
        setCart(newCart);
    }

    //console.log('Carrito: ', cart);

    const clearCart = () => setCart([]);

    const isCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))




    return (
        <CartContext.Provider value={{
            clearCart,
            isCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext