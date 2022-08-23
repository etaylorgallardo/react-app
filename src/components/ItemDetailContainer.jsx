import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const articulos = [
    {id: 1, nombre: "zapatillas", precio: 27000, foto: "/img/zapatillas.jpg"},
    {id: 2, nombre: "poleras", precio: 15000, foto: "/img/poleras.jpg"},
    {id: 3, nombre: "polerones", precio: 25000, foto: "/img/polerones.jpg"},
    {id: 4, nombre: "pelotas", precio: 18000, foto: "/img/pelotas.jpg"},

];


export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();

    console.log(detalleId);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(articulos);
            }, 1000);
        });

        getData.then(res => setData(res.find(articulos => articulos.id === parseInt(detalleId))));

        
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;