import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { db } from '../../Firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            let querySnapshot;
            if (categoryId) {
                const q = query(collection(db, "products"), where("category", "==", categoryId));
                querySnapshot = await getDocs(q);
            } else {
                querySnapshot = await getDocs(collection(db, "products"))
            };
            const productosFirebase = [];
            querySnapshot.forEach((doc) => {
                const product = {
                    id: doc.id,
                    ...doc.data()
                }
                productosFirebase.push(product)
            });
            setProducts(productosFirebase);
        };
        getProducts();
    }, [categoryId])
    return (
        <div>
            <ItemList productos={products} />
        </div>
    )
}

export default ItemListContainer