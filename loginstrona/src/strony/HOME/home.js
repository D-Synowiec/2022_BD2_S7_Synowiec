import React,{useEffect,useState} from "react";
import styl from "./home_style.module.css";
import zdj from "../../pliki/popo.jpg";
import {useNavigate} from "react-router-dom";

function Home_strona(){

  let przekierunkowanie = useNavigate();

    const handleSubmit = (event) => {
      //przekierunkowanie("/https://www.twitch.tv/popo");
      //window.location.href="https://www.twitch.tv/popo";
      //window.location.href="http://localhost:3000/login"
      przekierunkowanie('/LOGIN');
      event.preventDefault();

      // validate the form values
      // call a login function
    }

return (
    <div className={styl.moj_div}>
      <form className={styl.user_pass} onSubmit={handleSubmit}>
        <img className={styl.foto} src={zdj}/>
        <button type="submit">POPO</button>
      </form>
    </div>
    
    );
}

export default Home_strona