import React, {useState, useEffect} from "react";
import Title from "./Title";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'


const articulos = [
    {id: 1, nombre: "Zapatillas", precio: 27000, foto: "/img/zapatillas.jpg"},
    {id: 2, nombre: "Poleras", precio: 15000, foto: "/img/poleras.jpg"},
    {id: 3, nombre: "Polerones", precio: 25000, foto: "/img/polerones.jpg"},
    {id: 4, nombre: "Pelotas", precio: 18000, foto: "/img/pelotas.jpg"},

]

export const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(articulos);
            }, 1000);
        });
        if(id) {
            getData.then(res => res.filter(articulos => articulos.id === id));
        }else {
            getData.then(res => setData(res));
        }
        
    }, [id])

    const onAdd = (quantity) => {
        console.log('Agregaste ${quantity} unidades');
    }
    return (
        <div>
        <Title greeting={props.texto} />
        <ItemCount initial={1} stock={20} onAdd={onAdd} />
        <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;