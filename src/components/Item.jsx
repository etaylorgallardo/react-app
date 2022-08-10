import React from "react";

const item = ({info}) => {
    return (
        <a href='' className="articulos">
            <img src={info.foto} alt="" />
            <p>{info.nombre}</p>
            <p>{info.precio}</p>
        </a>
    );
}

export default item;