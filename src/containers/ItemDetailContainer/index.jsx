import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/6')
            .then(res => res.json())
            .then(json => setDetail(json))
            .catch((error) => {
                alert(error.message);
            });
    }, [])
    return (
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer