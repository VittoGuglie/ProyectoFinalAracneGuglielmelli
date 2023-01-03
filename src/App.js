import './App.css';
import NavBar from './components/NavBar';
import CartWidget from "./components/CartWidget"
import ItemListContainer from './containers/itemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Saludos'}/>
    </>
  );
}

export default App;
