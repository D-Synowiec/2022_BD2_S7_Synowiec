import React,{useEffect,useState} from "react";
import styl from "./register_style.module.css";
import zdj from "../../pliki/popo.jpg";
import user_pic from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import Popup from 'reactjs-popup';
import Cookies from 'js-cookie';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000/api",
})

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
      setName(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    }
  
    let przekierunkowanie = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        const res = api.post("/user",{email:username,password_hash:password,primary_name:name,second_name:surname,login:login})
        if(res.status!=200){//w backu jest 201 a powinno być 409
          console.log(res);//k**** daniel to do zrobienia tutaj sie prosze wyjasnić bo k**** nwm jaki status ty se wymyśliłeś do istniejącego uzytkownika
          przekierunkowanie("/home");
        }
        else{
          console.log("istnieje");
        }
      }
      catch(err){
        console.log(err);
      };
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