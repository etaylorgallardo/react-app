import React from "react";
import Title from "./Title";
import ItemCount from "./ItemCount";

export const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        console.log('Agregaste ${quantity} unidades');
    }
    return (
        <div>
        <Title greeting={props.texto} />
        <ItemCount initial={1} stock={20} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;