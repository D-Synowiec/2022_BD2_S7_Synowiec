import React,{useEffect,useState} from "react";
import axios from 'axios';
import styl from "./galleries_style.module.css";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import Linjika from "./komponenty/linijka"
import Gora from "./komponenty/gorna_linijka"
import Bar from "../../komponenty/NavBar.js";

function Galeria_strona(){
  const API = 'http://127.0.0.1:5000/api/gallery/me';
  let przekierunkowanie = useNavigate();
    useEffect(() => {
    getGalleries();
  },[]);
  const [galerie, setGalleries]=useState([]);



     function getGalleries(){

        axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
        {
            setGalleries(result.data);
        }).catch((error)=>{
            });
    }



  useEffect(() => {
    setGalleries(galerie);
  }, [galerie]);

  const rysunek_linjiki = galerie.map((element,index)=>{
    return(
      <Linjika 
      key={index}
      klucz={element.id}
      // miniaturka={element.miniaturka}
      name={element.name}
      // data={element.data}
      // rozmiar={element.rozmiar}
      // autor={element.autor}
      />
    )
  })

return (
    <div className={styl.moj_div}>
      <Bar/>
      <Gora/>
      {rysunek_linjiki}
    </div>
    
    );
}

export default Galeria_strona