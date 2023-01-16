import React,{useEffect,useState} from "react";
import styl from "./logout_style.module.css";
import zdj from "../../pliki/popo.jpg";
import user_pic from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';


function Logout_strona(){

    
  
    let przekierunkowanie = useNavigate();

    const handleSubmit = async (event) => {
      
      //przekierunkowanie("/https://www.twitch.tv/popo");
      //window.location.href="https://www.twitch.tv/popo";
      //window.location.href="http://localhost:3000/home"
      

      event.preventDefault();
      przekierunkowanie ('/login');


      // validate the form values
      // call a login function
    }

return (
    <div className={styl.moj_div}>
      <form className={styl.user_pass} onSubmit={handleSubmit}>
          
          
        <p>Wylogowano</p>

        <button className={styl.styl_przyc} type="submit">Logowanie</button>
      </form>
    </div>
    
    );
}

export default Logout_strona