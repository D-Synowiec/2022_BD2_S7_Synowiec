import React,{useEffect,useState} from "react";
import "./category.css";
import zdj from "../../pliki/popo.jpg";
import zdj2 from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import Fotka from "./komponenty/picture.js"
import Bar from "../../komponenty/NavBar.js";

function Category_strona(){

    const [dane_l,set_dane_l] = useState([
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj,},
        {obrazek: zdj2,},
        {obrazek: zdj2,}
      ])
    
      const jeden_obrazek = dane_l.map((element)=>{
        return(
          <Fotka 
          obrazek={element.obrazek}
          />
        )
      })  

    return(
      <div className='stronaKategoria'>
        <Bar/>      
        <div className='zdjecie'>
            <p className='g_tekst'>KATEGORIA</p>
                {jeden_obrazek} 
        </div>
      </div>
    )

}

export default Category_strona;