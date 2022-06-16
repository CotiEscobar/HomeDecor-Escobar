//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <>
    <Header />
    <ItemListContainer 
    greeting='Bienvenidos a mi tienda!' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
