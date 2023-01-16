import React,{useEffect,useState} from "react";
import styl from "./login_style.module.css";
import zdj from "../../pliki/popo.jpg";
import user_pic from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';


function Login_strona(){

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
    </div>
    
    );
}

export default Login_strona