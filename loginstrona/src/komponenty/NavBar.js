import './NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const NavBar = () => {
    const API = 'http://localhost:5000/api/user/logout';
    const navigate = useNavigate();

    async function handleClick1() {
        const response = await fetch(API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authentication': `Bearer ${Cookies.get("Ciastko")}`
            }
          });
          const data = await response.json();

        navigate("/");
    }
    async function handleClick2() {
        const response = await fetch(API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Cookies.get("Ciastko")}`
            }
          });
          Cookies.remove('Ciastko');
          console.log(Cookies.get("Ciastko"));

        navigate("/logout");
    }

    return ( 
        <nav className='navbar'>
            <Link to="/">Strona Główna</Link>
            <Link to="/home">Galerie</Link>
            <Link to="/">Kategorie</Link>
            <Link to="/gallery">Zdjęcia</Link>
            <div className='links'>
                <button onClick={handleClick1}>Ustawienia</button>
                <button onClick={handleClick2}>Wyloguj</button>
            </div>
        </nav>
     );
}
 
export default NavBar;