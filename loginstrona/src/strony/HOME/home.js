import React,{useEffect,useState} from "react";
import styl from "./home_style.module.css";
import zdj from "../../pliki/popo.jpg";
import {useNavigate} from "react-router-dom";
import Linjika from "./komponenty/linjika"
import Gora from "./komponenty/gora_linjika"

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

  const [dane_l,set_dane_l] = useState([
    {miniaturka: "miniaturka", tytul: "nazwa", data:"data", rozmiar:"rozmiar", autor:"autor"},
    {miniaturka: zdj, tytul: "tytul", data:"data", rozmiar:"0MB", autor:"autor"},
    {miniaturka: zdj, tytul: "tytul", data:"data", rozmiar:"0MB", autor:"autor"},
    {miniaturka: zdj, tytul: "popo", data:"06.01.2023", rozmiar:"20MB", autor:"MokrySuchar"},
    {miniaturka: zdj, tytul: "tytul", data:"data", rozmiar:"0MB", autor:"autor"},
    {miniaturka: zdj, tytul: "tytul", data:"data", rozmiar:"0MB", autor:"autor"},
    {miniaturka: zdj, tytul: "tytul", data:"data", rozmiar:"0MB", autor:"autor"}
  ])
  
  const rysunek_linjiki = dane_l.map((element)=>{
    return(
      <Linjika 
      miniaturka={element.miniaturka} 
      tytul={element.tytul}
      data={element.data}
      rozmiar={element.rozmiar}
      autor={element.autor}
      />
    )
  })

return (
    <div className={styl.moj_div}>
      <Gora/>
      {rysunek_linjiki}
    </div>
    
    );
}

export default Home_strona