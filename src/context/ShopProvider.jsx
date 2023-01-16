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

    const clearCart = () => {
        products.splice(0, products.length);
    }

    const removeProduct = (id) => {
        const productToRemove = products.find((prod) => prod.id === id);
        products.splice(products.indexOf(productToRemove), productToRemove);
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products){
            cantidadTotal += product.quantity;
        }
        return cantidadTotal;
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id);
    }

    return(
        <Shop.Provider value = {{products, addProduct, countCart, removeProduct, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider 