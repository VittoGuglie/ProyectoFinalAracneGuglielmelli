import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(product => setDetail(product))
            .catch((error) => {
                alert(error.message);
            });
    }, [id])
    return (
        <div>
            {
                Object.keys(detail).length === 0 ? <h2>Cargando ...</h2> : <ItemDetail detail={detail}/>
            }
        </div>
    )
}

export default ItemDetailContainer