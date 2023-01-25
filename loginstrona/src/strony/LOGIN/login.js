import React,{useEffect,useState} from "react";
import styl from "./login_style.module.css";
import zdj from "../../pliki/popo.jpg";
import user_pic from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';
import Popup from 'reactjs-popup';
import Cookies from 'js-cookie';

function Login_strona(){

    const API = 'http://localhost:5000/api/user/login';

    const [username, setUsername] = useState('admin'/*zostaw puste potem*/);
    const [password, setPassword] = useState('admin'/*zostaw puste potem*/);


    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    let przekierunkowanie = useNavigate();

    const handleSubmit = async (event) => {
      
      //przekierunkowanie("/https://www.twitch.tv/popo");
      //window.location.href="https://www.twitch.tv/popo";
      //window.location.href="http://localhost:3000/home"
      

      event.preventDefault();

      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
        email: username,
        password: password
        })
      });
      const data = await response.json();
      console.log(data);

      const token = data.tokens;
      Cookies.set("Ciastko", token, {expires: 30});
      console.log(Cookies.get("Ciastko"));

      const DBPassword = await bcrypt.hash("admin", 10);
      console.log(DBPassword);//tu bedzie hasło z db zabiast tego nie

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      bcrypt.compare(password, DBPassword, (err,isMatch)=> {
        if(isMatch)
        {
          console.log("poprawne hasło");
          przekierunkowanie('/HOME');
        }else{
          console.log("niepoprawne hasło");
          przekierunkowanie('/incorrect_login');
        }
      }
      )

      // validate the form values
      // call a login function
    }

return (
    <div className={styl.moj_div}>
      <form className={styl.user_pass} onSubmit={handleSubmit}>
        <img className={styl.foto} src={user_pic}/>
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
        
        <button className={styl.styl_przyc} type="submit">Login</button>
      </form>

      <Popup trigger={<button style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", marginLeft: 5, marginTop: 5}}>?</button>} position="right center">
        <div style={{color: "white", backgroundColor: 'green', borderRadius: '10px', padding: '5px', marginLeft: 5}}>
          By się zalogować wpisz login i hasło
        </div>
      </Popup>

    </div>
    
    );
}

export default Login_strona