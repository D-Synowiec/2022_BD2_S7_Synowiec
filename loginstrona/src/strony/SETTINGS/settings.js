import React from 'react'
import "./settings.css"
import Bar from "../../komponenty/NavBar.js";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  async function handleClick1() {
      navigate("/uploadPhoto");
  }
  
  async function handleClick2() {
    navigate("/options");
  }

  return (
    <div className='settingsStrona'>
        <Bar/>
        <div className='tekst'>
            <h1 className='naglowek'>OPCJE</h1>
            <div className='opis'>
                <button onClick={handleClick1}>Dodaj zdjęcie</button>
                <br/>
                <button onClick={handleClick2}>Stwórz galerię</button>
                <br/>

            </div>
        </div>
    </div>
  )
}

export default Settings