import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import styl from "./gallery_style.module.css";
import zdj from "../../pliki/popo.jpg";
import zdj2 from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import Fotka from "./komponenty/picture.js"
import Bar from "../../komponenty/NavBar.js";

function Gallery_strona(){
  const params = useParams();
  console.log(params.id); 

  useEffect(() => {getPictures()},[]);
  const [pictures, setPictures]=useState([]);
  const API = 'http://127.0.0.1:5000/api/gallery/';
  function getPictures(){
    axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
    {
        setPictures(result.data);
    }).catch((error)=>{
        });
}

  useEffect(() => {setPictures(pictures)}, [pictures]);

    // const [dane_l,set_dane_l] = useState([
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj,},
    //     {obrazek: zdj2,},
    //     {obrazek: zdj2,}
    //   ])
    
      const jeden_obrazek = pictures.map((element)=>{
        return(
          <Fotka 
          obrazek={element.obrazek}
          />
        )
      })  

    return(
      <div className={styl.moj_div2}>
        <Bar/>
        <div className={styl.moj_div}>
            <p className={styl.g_tekst}>ZDJĘCIA</p>
                {jeden_obrazek} 
        </div>
      </div>
    )

}

export default Gallery_strona;