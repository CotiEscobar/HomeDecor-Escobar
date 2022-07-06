//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';
import { app } from './utils/firebase.js';
import { db } from './utils/firebase';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Main />
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
