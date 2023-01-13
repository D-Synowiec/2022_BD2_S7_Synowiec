import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return ( 
        <nav className='navbar'>
            <Link to="/">Strona Główna</Link>
            <Link to="/home">Galerie</Link>
            <Link to="/">Kategorie</Link>
            <Link to="/gallery">Zdjęcia</Link>
            <div className='links'>
                <Link to="/">Ustawienia</Link>
                <Link to="/login">Wyloguj</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;