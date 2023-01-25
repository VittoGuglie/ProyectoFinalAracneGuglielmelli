import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './containers/CartContainer';
import ShopProvider from './context/ShopProvider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ShopProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ShopProvider>
    </>
  );
}

export default App;
