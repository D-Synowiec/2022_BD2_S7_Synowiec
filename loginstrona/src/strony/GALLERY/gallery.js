import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import styl from "./gallery_style.module.css";
import {useNavigate} from "react-router-dom";
import Bar from "../../komponenty/NavBar.js";
import MetaData from "./komponenty/metaData";

function Gallery_strona(){
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params.id); 

  useEffect(() => {getMetaData()},[]);
  const [metaData, setMetaData]=useState([]);

  const API = `http://127.0.0.1:5000/api/gallery/${params.id}/photos`;//`${}`
  function getMetaData(){
    axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
    {
        setMetaData(result.data.Photos);
        console.log(result.data);
    }).catch((error)=>{
        });
}
    
      const jeden_obrazek = metaData.map((element, index)=>{
        return(
          <MetaData 
          key={index}
          photoIDs={element.id}
          />
        )
      })  

      async function handleClick1() {
          navigate(`/uploadPhoto/${params.id}`);
      }

    return(
      <div className={styl.moj_div2}>
        <Bar/>
        <div className={styl.moj_div}>
          <div className={styl.przycisk1}>
          <button className={styl.przycisk} onClick={handleClick1}>Dodaj zdjęcie</button>
          </div>
            <p className={styl.g_tekst}>ZDJĘCIA</p>
            <br/>
            <div className={styl.wyswietlaneZdj}>
            {jeden_obrazek}
            </div>
        </div>
      </div>
    )

}

export default Gallery_strona;