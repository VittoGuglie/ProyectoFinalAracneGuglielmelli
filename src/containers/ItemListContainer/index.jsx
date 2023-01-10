import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch((error) => {
                alert(error.message);
            });
    }, [])
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer