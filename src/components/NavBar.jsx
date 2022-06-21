import CartWidget from './CartWidget';
import '../styles/navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  
  return ( 
    <nav className='navbar-container'>
      <li className='links-container'>
        <Link to="category/3" className='link'>MESAS</Link>
        <Link to="category/1" className='link'>SILLAS</Link>
        <Link to="category/2" className='link'>LAMPARAS</Link>
        <CartWidget />
      </li>
    </nav>
  )
}

export default NavBar;