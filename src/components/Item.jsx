import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";



const Item = ({ info } ) => {
   const nombre = useContext(CartContext);
   console.log(nombre);

    return (
        <Link to={`/detalle/${info.id}`} className="articulos">
            <img src={info.foto} alt="" />
            <p>{info.nombre}</p>
            <p>{info.precio}</p>
        </Link>
    );
}

export default Item;