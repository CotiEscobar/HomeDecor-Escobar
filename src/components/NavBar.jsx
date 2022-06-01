import CartWidget from './CartWidget';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <li className='links-container'>
        <a href="" className='link'>SHOP</a>
        <a href="" className='link'>ABOUT</a>
        <a href="" className='link'>CONTACT US</a>
        <CartWidget />
      </li>
    </nav>
  );
}

export default NavBar;