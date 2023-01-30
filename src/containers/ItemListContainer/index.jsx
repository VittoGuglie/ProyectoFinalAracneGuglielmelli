import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../Hooks/useFirebase';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [products, loading, error] = useFirebase(categoryId);

    return (
        <>
            {error && <h1>Hubo un error: {error}</h1>}
            {
                loading ?
                    <Spinner animation="border" variant="info" />
                    : <ItemList productos={products} />
            }
        </>
    )
}

export default ItemListContainer;