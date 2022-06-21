//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Main />
      </BrowserRouter>
  );
}

export default App;
