import React from 'react';
import NavBar from '../components/NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from '../containers/CartContainer';
import Footer from '../components/Footer';

const MainNavigator = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<h2>Ruta no encontrada</h2>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default MainNavigator