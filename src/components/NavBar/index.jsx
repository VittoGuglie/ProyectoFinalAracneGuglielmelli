import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import App from '../../App'

export default function NavBar(){
    return (
        <ul className='navList'>
            <li className='navItem'>
                <a href="#home">Inicio</a>
            </li>
            <li className='navItem'>
                <a href="#products">Productos</a>
            </li>
            <li className='navItem'>
                <a href="#service">Servicios</a>
            </li>
            <li className='navItem'>
                <a href="#contact">Contacto</a>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    )
}