import React from 'react'
import {useNavigate} from "react-router-dom";
import Bar from "../../komponenty/NavBar.js";
import './home.css';

export const Home = () => {
  return (
    <div className='homeStrona'>
        <Bar/>
        <div className='tekst'>
            <h1 className='naglowek'>Co nowego?</h1>
            <div className='opis'>
              * Strony logowania
              <br /><br />
              * Strony galerii
              <br /><br />
              * Lista galerii
              <br /><br />
              * Lista kategorii
              <br /><br />
              * Podstawowe połączenie z API
              
            </div>
        </div>
    </div>
  )
}

export default Home;