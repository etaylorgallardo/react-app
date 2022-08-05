import React,{useState} from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [cantidad, setCount] = useState(initial);

    const decremento = () => {
        setCount(cantidad - 1);
    }

    const incrementar = () => {
        setCount(cantidad +1) 
    }

    return (
        <div className='counter' >
            <button disabled={cantidad <= 1} onClick={decremento}>-</button>
            <span>{cantidad}</span>
            <button disabled={cantidad >= stock} onClick={incrementar}>+</button>
            <div>
            <button disable={stock <= 0} onClick={() => onAdd(cantidad)}>Agregar al Carro</button>
            </div>


        </div>
    );
}

export default ItemCount;