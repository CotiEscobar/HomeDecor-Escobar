import '../styles/navbar.css';


const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <h1 className='logo'>HOME.CE</h1>
      </div>
      <li className='links-container'>
        <a href="" className='link'>SHOP</a>
        <a href="" className='link'>ABOUT</a>
        <a href="" className='link'>CONTACT US</a>
      </li>
    </div>
  );
}

export default NavBar;