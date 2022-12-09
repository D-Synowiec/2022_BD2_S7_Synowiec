import React,{useEffect,useState} from "react";
import styl from "./login_style.module.css";
import zdj from "../../pliki/popo.jpg";
import {useNavigate} from "react-router-dom";

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

    const handleSubmit = (event) => {
      //przekierunkowanie("/https://www.twitch.tv/popo");
      location.href="https://www.twitch.tv/popo";
      event.preventDefault();

      // validate the form values
      // call a login function
    }

return (
    <div className={styl.moj_div}>
      <form className={styl.user_pass} onSubmit={handleSubmit}>
        <img className={styl.foto} src={zdj}/>
        <label>
          Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        
        <label>
          Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        
        <button type="submit">Login</button>
      </form>
    </div>
    
    );
}

export default Login_strona