import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return (
        <ul className='navList'>
            <li className='navItem'>
                <Link to="/"><img src="..\logoempresa.png" alt="logo-empresa-aracne" style={{
                    width:'50%',
                }}/></Link>
            </li>
            <li className='navItem'>
                <Link to="/category/electronics">Electrónica</Link>
            </li>
            <li className='navItem'>
                <Link to="/category/jewelery">Joyería</Link>
            </li>
            <li className='navItem'>
                <Link to="/category/men's clothing">Ropa de hombre</Link>
            </li>
            <li className='navItem'>
                <Link to="/category/women's clothing">Ropa de mujer</Link>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    )
}