import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";

const CartItem = ({product, deleteItem}) => {
    const { getTotalPrice } = useContext(Shop);
    return (
        <tr>
            <th scope="row">{product.id}</th>
            <td><img src={product.image} alt={product.title} style={{
                    width: '10%'
                }}/></td>
            <td>{product.title}</td>
            <td>U$D{product.price}</td>
            <td>{product.quantity}</td>
            <td>U$D{getTotalPrice()}</td>
            <td><button className='btn btn-danger' onClick={() => deleteItem(product.id)}>Eliminar</button></td>
        </tr>
    );
};
export default CartItem;
