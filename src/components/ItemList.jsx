import Item from "./Item";
import React from "react";

const ItemList = ({ data = [] }) => {
  return data.map((articulos) => <Item key={articulos.id} info={articulos} />);
};

export default ItemList;
