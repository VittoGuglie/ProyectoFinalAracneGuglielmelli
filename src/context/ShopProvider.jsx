import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';

export const Shop = createContext()

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id);
        if (isInCart) {
            const productoRepetido = products.find(element => element.id === product.id);
            productoRepetido.quantity += product.quantity;
            setProducts([...products]);
        } else {
            setProducts([...products, product]);
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity;
        }
        return cantidadTotal;
    }

    const deleteItem = (id) => {
        Swal.fire({
            title: '¿Deseas eliminar estos items del carrito?',
            showDenyButton: true,
            confirmButtonText: 'Si, quiero eliminarlos',
            denyButtonText: `No, no quiero`,
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCart = products.filter(element => element.id !== id);
                setProducts(updatedCart);
                Swal.fire('¡Eliminado!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Okay, tus items seguirán en el carrito', '', 'info')
            }
        })
    }

    const clearCart = () => {
        Swal.fire({
            title: '¿Deseas vaciar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No, no quiero`,
        }).then((result) => {
            if (result.isConfirmed) {
                setProducts([]);
                Swal.fire('¡Eliminado!', 'Los items han sido eliminados con éxito', 'success')
            } else if (result.isDenied) {
                Swal.fire('Okay, tus items seguirán en el carrito', '', 'info')
            }
        })
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id);
    }

    const getTotalPrice = () => {
        return products.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    return (
        <Shop.Provider value={{ products, addProduct, countCart, deleteItem, clearCart, getTotalPrice }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider 