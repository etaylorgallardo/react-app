import React, {useState} from "react";


export const CartContext = React.createContext([]);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart);
    }

    console.log('Carrito: ', cart);

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))




    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice, totalProducts, cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;