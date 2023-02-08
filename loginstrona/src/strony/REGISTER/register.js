import React,{useEffect,useState} from "react";
import styl from "./register_style.module.css";
import zdj from "../../pliki/popo.jpg";
import user_pic from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import Popup from 'reactjs-popup';
import Cookies from 'js-cookie';

function Register_strona(){

    const [username, setUsername] = useState('nowy_użytkownik@Test.com');
    const [password, setPassword] = useState('123');
    const [name, setName] = useState('Paulina');
    const [surname, setSurname] = useState('Farkas');
    const [login, setLogin] = useState('Grubas');



    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }

    const handleNameChange = (event) => {
      setPassword(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginChange = (event) => {
        setPassword(event.target.value);
    }
  
    let przekierunkowanie = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
    }

return (
    <div className={styl.moj_div}>
      <form className={styl.user_pass} onSubmit={handleSubmit}>
        <label>
          Username:
          </label>
          <input className={styl.input}
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        
        <label>
          Password:
          </label>
          <input className={styl.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

        <label>
          Imię:
          </label>
          <input className={styl.input}
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        
        <label>
          Nazwisko:
          </label>
          <input className={styl.input}
            type="text"
            value={surname}
            onChange={handleSurnameChange}
          />
          
        <label>
         Login:
        </label>
        <input className={styl.input}
            type="text"
            value={login}
            onChange={handleLoginChange}
        />    
        
        <button className={styl.styl_przyc} type="submit">Zarejestruj</button>
      </form>

    </div>
    
    );
}

export default Register_strona