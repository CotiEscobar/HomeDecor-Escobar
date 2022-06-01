import NavBar from "./NavBar";
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header-container">
            <h1 className='logo'>HOME.CE</h1>
            <NavBar />
        </header>
    )
}

export default Header;