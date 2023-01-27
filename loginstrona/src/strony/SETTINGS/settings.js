import React from 'react'
import "./settings.css"
import Bar from "../../komponenty/NavBar.js";

const Settings = () => {
  return (
    <div className='settingsStrona'>
        <Bar/>
        <div className='tekst'>
            <h1 className='naglowek'>USTAWIENIA</h1>
            <div className='opis'>
              opis
            </div>
        </div>
    </div>
  )
}

export default Settings