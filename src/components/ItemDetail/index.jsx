import React from 'react'

const ItemDetail = ({detail}) => {
    return (
        <div>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} className='grid-img' style={{
            width:'30%'
            }}/>
            <p className='grid-price'>U$D{detail.price}</p>
            <p className='grid-description'>{detail.description}</p>
            <button className='btn btn-success'>Añadir al carrito</button>
        </div>
    )
}

export default ItemDetail