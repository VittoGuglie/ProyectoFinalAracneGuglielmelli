import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
            })
            .then(res => res.json())
            .then(products => {
                if(categoryId){
                    const productsFilteredByCategory = products.filter(producto => producto.category === categoryId);
                    setProducts(productsFilteredByCategory);
                } else {
                    setProducts(products);
                }
            })
    }, [categoryId])
    return (
        <div>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer