import React, { useContext } from 'react';
import './styles.css';
import CartItem from '../../components/CartItem';
import { Shop } from '../../context/ShopProvider';
import { Link } from 'react-router-dom';
import generateOrderObject from '../../Services/generateOrderObject';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const CartContainer = () => {
    const { products, deleteItem, clearCart, getTotalPrice } = useContext(Shop);

    const [loader, setLoader] = useState(false);

    const [formVisibility, setFormVisibility] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const confirmPurchase = async () => {
        try {
            setLoader(true);
            const order = generateOrderObject({
                nombre: name,
                email: email,
                telefono: phonenumber,
                cart: products,
                total: getTotalPrice()
            });

            const docRef = await addDoc(collection(db, "orders"), order);
            clearCart();
            for (const productCart of products) {
                const productsRef = doc(db, "products", productCart.id);
                await updateDoc(productsRef, {
                    stock: productCart.stock - productCart.quantity
                });
            }
            Swal.fire(
                '¡Compra exitosa!',
                'Gracias por su compra. Orden confirmada con id: ' + docRef.id,
                'success'
            );
        } catch (error) {
            alert("Oh, oh. Ha ocurrido un error.");
        } finally {
            setLoader(false);
        }
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
                        <table className="table table-info table-striped">
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
                        {loader ? <h2>Cargando...</h2> : <button className='btn btn-info' onClick={() => {
                            setFormVisibility(true);
                        }}>Terminar la compra</button>}
                        {formVisibility === true &&
                            <form onSubmit={ev => {
                                ev.preventDefault();
                            }}>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email:</label>
                                    <input type="email" name="email" value={email} className="form-control" aria-describedby="emailHelp" placeholder='Ingrese su email' onChange={ev => setEmail(ev.target.value)} />
                                    <div id="emailHelp" className="form-text">Nunca compartiremos tu email.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Nombre:</label>
                                    <input type="name" name="name" value={name} className="form-control" placeholder='Ingrese su nombre' onChange={ev => setName(ev.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="telefono" className="form-label">Telefono:</label>
                                    <input type="telefono" value={phonenumber} name="telefono" className="form-control" placeholder='Ingrese su telefono' onChange={ev => setPhonenumber(ev.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-success" onClick={() => { confirmPurchase() }}>Finalizar compra</button>
                            </form>}
                    </>
                }
            </div>
        </div>
    )
}

export default CartContainer;