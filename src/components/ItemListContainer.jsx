import React, {useState, useEffect} from "react";
import Title from "./Title";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const articulos = [
    {id: 1, nombre: "zapatillas", precio: 27000, foto: "/img/zapatillas.jpg"},
    {id: 2, nombre: "poleras", precio: 15000, foto: "/img/poleras.jpg"},
    {id: 3, nombre: "polerones", precio: 25000, foto: "/img/polerones.jpg"},
    {id: 4, nombre: "pelotas", precio: 18000, foto: "/img/pelotas.jpg"},

]

export const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(articulos);
            }, 1);
        });
        if(id) {
            getData.then(res => setData(res.filter(articulos => articulos.nombre === id)));
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
        <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;