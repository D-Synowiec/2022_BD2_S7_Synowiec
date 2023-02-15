import React,{useEffect,useState} from 'react'
import "./settings.css"
import Bar from "../../komponenty/NavBar.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: "http://localhost:5000/api",
})

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
  const [name, setName] = useState('imie');
  const [surname, setSurname] = useState('nazwisko');

  let przekierunkowanie = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  }

  const handleSubmit = async (event) => {
      
    event.preventDefault();

    if(password_chk===password_new)
    {
      console.log('git');
      console.log(password_new);
    }
    else{
      console.log('nie git');
    }
  }

  const API="http://localhost:5000/api/user"

  const handleSubmitDELETE = async (event) => {
    event.preventDefault();
    console.log('usuń konto');// get, post, delete do używania bedzie
    try{
      //const res = api.delete("/user")
      axios.delete(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
        {
            console.log(result);
            przekierunkowanie("/login");
            // console.log(result.data);
        }).catch((error)=>{
      });


      //console.log(res);
      //przekierunkowanie("/login");
    }
    catch(err){
      console.log(err);
    }
  }

  const handleSubmitNAME = async (event) => {
    event.preventDefault();
    console.log('zmień imie');
    // nie ma api bo danielka boli ząbek :C
  }

  const handleSubmitPASSWORDCHANGE = async (event) => {
    event.preventDefault();
    console.log('zmień nazwisko');
    // nie ma api bo danielka boli ząbek :C
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
            type="password"
            value={password}
            onChange={handleUsernameChange}
          />
        
          <label>
          Nowe Hasło:
          </label>
          <input className='input'
            type="password"
            value={password_chk}
            onChange={handlePasswordChange}
          />

          <label>
          Powtórz Hasło:
          </label>
          <input className='input'
            type="password"
            value={password_new}
            onChange={handlePassword2Change}
          />
        
        <button className='styl_przyc' type="submit">Zmień Hasło</button>
      <br/>

          <label>
          Imię:
          </label>
          <input className='input'
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <button className='styl_przyc' onClick={handleSubmitNAME} type="submit">Zmień Imię</button>
          <br/>
          <label>
          Nazwisko:
          </label>
          <input className='input'
            type="text"
            value={surname}
            onChange={handleSurnameChange}
          />
          <button className='styl_przyc2' onClick={handleSubmitPASSWORDCHANGE} type="submit">Zmień Nazwisko</button>
          <br/>
      <button className='styl_przyc' onClick={handleSubmitDELETE} type="submit">Usuń Konto</button>
      </form>
      <br/><br/>
        </div>
        
    </div>
    
  )
}

export default Settings