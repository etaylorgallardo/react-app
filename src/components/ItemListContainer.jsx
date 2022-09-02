import React, {useState, useEffect} from "react";
import Title from "./Title";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    console.log('cat:', categoriaId);

    

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'articulos');
        if(categoriaId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(articulos => ({id: articulos.id, ...articulos.data()}))))
            
        }else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(articulos => ({id: articulos.id, ...articulos.data()}))))
        }
        
    }, [categoriaId])

    
    return (
        <div>
        <Title greeting={props.texto} />
        <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;