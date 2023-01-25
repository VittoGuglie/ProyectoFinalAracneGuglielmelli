import React, { useContext } from 'react';
import './styles.css';
import CartItem from '../../components/CartItem';
import { Shop } from '../../context/ShopProvider';
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const { products, deleteItem, clearCart } = useContext(Shop);

    // const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className='cartContainer'>
            <h2>Cart Items</h2>
            <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
            <div>
                {
                    products.length === 0 && <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <h3>El carrito está vacio.</h3>
                        <Link to='/'>¡Prueba agregando algún producto!</Link>
                    </div>
                }
                {
                    products.length > 0 &&
                    <table class="table table-info table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio individual</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <CartItem key={item.id} product={item} deleteItem={deleteItem} />
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default CartContainer;