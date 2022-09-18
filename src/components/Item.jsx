import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {
  console.log(info.foto);
  console.log(info.nombre);
  console.log(info.id);

  return (
    <Link to={`/detalle/${info.id}`}>
      <div className="card">
        <div className="item-image">
          <img src={info.foto} alt="" />
        </div>
        <div className="item-detail">
          <p>{info.nombre}</p>
          <p>${info.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
