import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";

const articulos = {id: 1, nombre: "Zapatillas", precio: 27000, foto: "img/zapatillas.jpg"};


export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(articulos);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;