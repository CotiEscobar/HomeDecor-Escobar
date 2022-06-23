import NavBar from './NavBar';
import '../styles/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-container">
            <Link to="/" className='logo'>
            <h1 className='page-title'>HOME.CE</h1>
            </Link>
            <NavBar 
            inHeader={true}
            links={["link1","link2","link3"]}/>
        </header>
    )
}

export default Header;