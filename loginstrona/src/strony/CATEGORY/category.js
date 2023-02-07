import React,{useEffect,useState} from "react";
import "./category.css";
import zdj from "../../pliki/popo.jpg";
import zdj2 from "../../pliki/user_pic.png";
import {useNavigate} from "react-router-dom";
import Fotka from "./komponenty/picture.js"
import Bar from "../../komponenty/NavBar.js";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

function Category_strona(){
  const params = useParams();

  useEffect(() => {getCategoryPictures()},[]);
  const [categoryPictures, setCategoryPictures]=useState([]);
  const [categoryName, setCategoryName]=useState([]);

  const API = `http://127.0.0.1:5000/api/category/${params.id}/photos`;
  function getCategoryPictures(){
    axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
    {
        setCategoryPictures(result.data.Photos);
        setCategoryName(result.data.name)
        console.log(result.data);
    }).catch((error)=>{
        });
  }
    
      const jeden_obrazek = categoryPictures.map((element, index)=>{
        return(
          <Fotka
          key={index}
          photoID={element.id}
          name={element.name}
          />
        )
      })

    return(
      <div className='stronaKategoria'>
        <Bar/>      
        <div className='zdjecie'>
            <p className='g_tekst'>KATEGORIA</p>
                {/* {jeden_obrazek}  */}
        </div>
      </div>
    )

}

export default Category_strona;