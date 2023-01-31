import React,{useEffect,useState} from "react";
import styl from "./bad_login_style.module.css";
import zdj from "../../pliki/popo.jpg";
import user_pic from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';

function Bad_login_strona(){

    
  
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
          
          
        <p>Nieprawidłowe dane logowania</p>

        <button className={styl.styl_przyc} type="submit">Powrót</button>
      </form>
    </div>
    
    );
}

export default Bad_login_strona