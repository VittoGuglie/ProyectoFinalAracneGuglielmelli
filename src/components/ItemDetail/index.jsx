import React, {useState} from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { Shop } from '../../context/ShopProvider'


const ItemDetail = ({detail}) => {
    const [quantity, setQuantity] = useState(0)

    const {addProduct, clearCart, removeProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

    return (
        <div>
            <h2>{detail.title}</h2>
            <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '70px',
            alignItems: 'center',
            width: '100%',
            height: '90vh',
            }}>
                <img src={detail.image} alt={detail.title} style={{
                    width:'30%'
                }}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <p className='price'>U$D{detail.price}</p>
                    <p className='description'>{detail.description}</p>
                </div>
            </div>
            <aside style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '50px',
                alignItems: 'center',
            }}>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={10} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-success p-2">
                        <Link to="/cart" style={{
                            color: 'white',
                            textDecoration: 'none',
                        }}>
                            Ir al carrito
                        </Link>
                    </button>
                }
            </aside>
            <button className='btn btn-danger p-2 m-3' onClick={removeProduct()}>
                Eliminar del Carrito
            </button>
            <button className='btn btn-danger p-2 m-3' onClick={clearCart()}>
                Vaciar Carrito
            </button>
        </div>
    )
}

export default ItemDetail