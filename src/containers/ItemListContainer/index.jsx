import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => {
                if(categoryId){
                    const productsFilteredByCategory = products.filter(producto => producto.category === categoryId)
                    setProducts(productsFilteredByCategory)
                } else {
                    setProducts(products)
                }
            })
            .catch((error) => {
                alert(error.message)
            });
    }, [categoryId])
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer