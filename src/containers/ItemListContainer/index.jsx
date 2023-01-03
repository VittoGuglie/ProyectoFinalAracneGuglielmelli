import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import productos from '../../data/products.json'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const promise = new Promise((acc, rej) => {
            setTimeout(() => {
                acc(productos);
            }, 2000);
        });
        promise
            .then((result) => {
                setProducts(result);
            })
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