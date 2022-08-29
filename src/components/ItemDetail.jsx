
import ItemCount from "./ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";


export const ItemDetail = ({ data }) => {
    const [irAlCarro, setIrAlCarro] = useState(false);
    
    const { addProduct } = useContext(CartContext);

    const onAdd = (quantity) => {
        setIrAlCarro(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
        <div className="detail">
            <img className="detail_image" src={data.foto} alt="" />
            <div className="content">
                <h1>{data.nombre}</h1>
                {
                    irAlCarro
                    ? <Link to={'/cart'}> Finalizar Compra</Link>
                    : <ItemCount initial={1} stock={20} onAdd={onAdd} />
                }
                
            </div>
        </div>
    </div>
    );
}


export default ItemDetail;