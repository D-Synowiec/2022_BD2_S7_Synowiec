import React,{useEffect,useState} from "react";
import "./category.css";
import {useNavigate} from "react-router-dom";
import Fotka from "./komponenty/picture.js"
import Bar from "../../komponenty/NavBar.js";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

function Category_strona(){
  const params = useParams();

  useEffect(() => {getCategoryGalleries()},[]);
  const [categoryGalleries, setCategoryGalleries]=useState([]);

  const API = `http://127.0.0.1:5000/api/category/${params.id}`;
  function getCategoryGalleries(){
    axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
    {
        setCategoryGalleries(result.data);
        console.log(result.data);
    }).catch((error)=>{
        });
    }
    
      // const jeden_obrazek = categoryPictures.map((element, index)=>{
      //   return(
      //     <Fotka
      //     key={index}
      //     photoID={element.id}
      //     name={element.name}
      //     />
      //   )
      // })

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