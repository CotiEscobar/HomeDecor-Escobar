//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <Header />
    <ItemListContainer 
    greeting='Bienvenidos a mi tienda!' />
    </>
  );
}

export default App;
