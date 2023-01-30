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
import FormComp from '../../components/FormComp';
import Spinner from 'react-bootstrap/Spinner';

const CartContainer = () => {
    const { products, deleteItem, clearCart, getTotalPrice, clearCartForm } = useContext(Shop);

    const [loader, setLoader] = useState(false);

    const [formVisibility, setFormVisibility] = useState(false);

    const confirmPurchase = async (data) => {
        const {name: nombre, email, phonenumber: telefono} = data
        try {
            setLoader(true);
            const order = generateOrderObject({
                nombre,
                email,
                telefono,
                cart: products,
                total: getTotalPrice()
            });

            const docRef = await addDoc(collection(db, "orders"), order);
            clearCartForm();
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
                        {loader ? <Spinner animation="border" variant="info" /> : <button className='btn btn-info' onClick={() => {
                            setFormVisibility(true);
                        }}>Terminar la compra</button>}
                        {formVisibility === true &&
                            <FormComp
                            confirmPurchase={confirmPurchase}
                            setFormVisibility={setFormVisibility}
                            formVisibility={formVisibility}
                            />
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default CartContainer;