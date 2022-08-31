import React from "react";
import { Link } from "react-router-dom";




const Item = ({ info } ) => {
  console.log(info.foto);
  console.log(info.nombre);
  console.log(info.id);

    return (
        <Link to={`/detalle/${info.id}`} className="articulos">
            <img src={info.foto} alt="" />
            <p>{info.nombre}</p>
            <p>{info.precio}</p>
        </Link>
    );
}

export default Item;