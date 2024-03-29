import React, { useEffect, useState } from "react";
import styl from "./logout_style.module.css";
import { useNavigate } from "react-router-dom";

function Logout1_strona() {
  let przekierunkowanie = useNavigate();

  const handleSubmit = async (event) => {
    //przekierunkowanie("/https://www.twitch.tv/popo");
    //window.location.href="https://www.twitch.tv/popo";
    //window.location.href="http://localhost:3000/home"

    event.preventDefault();
    przekierunkowanie("/options");

    // validate the form values
    // call a login function
  };

  return (
    <div className={styl.moj_div}>
      <form className={styl.user_pass} onSubmit={handleSubmit}>
        <p>Błędne hasło</p>

        <button className={styl.styl_przyc} type="submit">
          Powrót
        </button>
      </form>
    </div>
  );
}

export default Logout1_strona;
