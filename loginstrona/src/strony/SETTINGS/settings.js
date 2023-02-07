import React,{useEffect,useState} from 'react'
import "./settings.css"
import Bar from "../../komponenty/NavBar.js";
import { useNavigate } from "react-router-dom";



const Settings = () => {
  // const navigate = useNavigate();

  // async function handleClick1() {
  //     navigate("/uploadPhoto");
  // }
  
  // async function handleClick2() {
  //   navigate("/options");
  // }
  const [password, setUsername] = useState('123');
  const [password_chk, setPassword] = useState('123');
  const [password_new, setPassword2] = useState('123');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  }

  const handleSubmit = async (event) => {
      
    //przekierunkowanie("/https://www.twitch.tv/popo");
    //window.location.href="https://www.twitch.tv/popo";
    //window.location.href="http://localhost:3000/home"

    event.preventDefault();

    if(password_chk===password)
    {
      console.log('git');
      console.log(password_new);
    }
    else{
      console.log('nie git');
    }
  }

  const handleSubmit1 = async (event) => {

    event.preventDefault();
    console.log('usuń konto');
  }


  return (
    <div className='settingsStrona'>
        <Bar/>
        <div className='tekst'>
        
            <h1 className='naglowek'>OPCJE</h1>
            <form className='user_passs' onSubmit={handleSubmit}>
        
        <label>
          Hasło:
          </label>
          <input className='input'
            type="text"
            value={password}
            onChange={handleUsernameChange}
          />
        
        <label>
          Powtórz Hasło:
          </label>
          <input className='input'
            type="password"
            value={password_chk}
            onChange={handlePasswordChange}
          />

<label>
          Nowe Hasło:
          </label>
          <input className='input'
            type="password"
            value={password_new}
            onChange={handlePassword2Change}
          />
        
        <button className='styl_przyc' type="submit">Zmień Hasło</button>
      </form>

      <button className='styl_przyc' onClick={handleSubmit1} type="submit">Usuń Konto</button>


            <div className='opis'>
                {/* <button onClick={handleClick1}>Dodaj zdjęcie</button>
                <br/>
                <button onClick={handleClick2}>Stwórz galerię</button>
                <br/> */}
              zmien imie/nazwisko {/*(dane)*/}
              <br/>
              usun konto
              <br/>
              rejestracja** na6

              
              
        
        <label></label>
            </div>
        </div>
        
    </div>
    
  )
}

export default Settings