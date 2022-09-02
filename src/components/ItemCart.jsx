import React, {useContext} from "react";
import { CartContext } from "../CartContext";



const ItemCart = ({ product }) => {
    const { removeProduct } = useContext(CartContext);
    return (
        <div className="itemCart">
            <img src ={product.foto} alt={product.title} />
            <div>
                <p>Titulo: {product.nombre} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio: {product.precio} </p>
                <p>Subtotal: ${product.quantity * product.precio} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>

            


        </div>
    )
}

export default ItemCart;