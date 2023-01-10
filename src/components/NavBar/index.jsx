import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return (
        <ul className='navList'>
            <li className='navItem'>
                <Link to="/"><img src="C:\Users\Hp\OneDrive\Escritorio\ecommerceGuglielmelli\aracne\public\logoempresa.png" alt="logo-empresa-aracne" /></Link>
            </li>
            <li className='navItem'>
                <a href="#products">Electrónica</a>
            </li>
            <li className='navItem'>
                <a href="#service">Ropa</a>
            </li>
            <li className='navItem'>
                <a href="#contact">Accesorios</a>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    )
}