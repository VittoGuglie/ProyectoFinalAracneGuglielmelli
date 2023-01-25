import React from 'react';
import { useState } from 'react';
import {createContext} from 'react';

export const Shop = createContext()

const ShopProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id);
        if (isInCart){
            const productoRepetido = products.find(element => element.id === product.id);
            productoRepetido.quantity += product.quantity;
            setProducts([...products]);
        } else{
            setProducts([...products, product]);
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products){
            cantidadTotal += product.quantity;
        }
        return cantidadTotal;
    }

    const deleteItem = (id) => {
        const updatedCart = products.filter(element => element.id !== id);
        setProducts(updatedCart);
    }

    const clearCart = () => {
        setProducts([]);
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id);
    }

    const getTotalPrice = () => {
        return products.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    return(
        <Shop.Provider value = {{products, addProduct, countCart, deleteItem, clearCart, getTotalPrice}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider 