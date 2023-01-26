import React, { useContext } from 'react';
import './styles.css';
import CartItem from '../../components/CartItem';
import { Shop } from '../../context/ShopProvider';
import { Link } from 'react-router-dom';
import generateOrderObject from '../../Services/generateOrderObject';
import { useState } from 'react';

const CartContainer = () => {
    const { products, deleteItem, clearCart } = useContext(Shop);
    const [formVisibility, setFormVisibility] = useState(false);
    
    const confirmPurchase = () => {
        const order = generateOrderObject();
        setFormVisibility(true);
    }

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
                    products.length > 0 && <>
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
                        <button className='btn btn-info' onClick={confirmPurchase()}>Terminar la compra</button>
                        {
                            formVisibility = true &&
                            <div class="modal" tabindex="-1">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Complete el formulario para confirmar su compra:</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="email" class="form-label">Email:</label>
                                                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder='Ingrese su email'/>
                                                        <div id="emailHelp" class="form-text">Nunca compartiremos tu email.</div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="name" class="form-label">Nombre:</label>
                                                    <input type="name" class="form-control" placeholder='Ingrese su nombre'/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="telefono" class="form-label">Telefono:</label>
                                                    <input type="telefono" class="form-control" placeholder='Ingrese su telefono'/>
                                                </div>
                                                <button type="submit" class="btn btn-success">Finalizar compra</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default CartContainer;