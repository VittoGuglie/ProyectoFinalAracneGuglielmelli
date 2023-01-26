import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const productDetail = {
                    id: docSnap.id,
                    ...docSnap.data()
                };
                setDetail(productDetail);
            } else {
                return <h1>No tenemos ese producto...</h1>
            }
        }
        getProduct();
    }, [id])
    return (
        <div>
            {
                Object.keys(detail).length === 0 ? <h2>Cargando ...</h2> : <ItemDetail detail={detail} />
            }
        </div>
    )
}

export default ItemDetailContainer