import React,{useEffect,useState} from "react";
import "./category.css";
import {useNavigate} from "react-router-dom";
import Fotka from "./komponenty/picture.js"
import OneGallery from "./komponenty/oneGallery";
import Bar from "../../komponenty/NavBar.js";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

function Category_strona(){
  const params = useParams();

  useEffect(() => {getCategoryGalleries()},[]);
  const [categoryGalleries, setCategoryGalleries]=useState([]);
  const [categoryName, setCategoryName]=useState([]);

  const API = `http://127.0.0.1:5000/api/category/${params.id}`;
  function getCategoryGalleries(){
    axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
    {
        setCategoryGalleries(result.data.galleries);
        setCategoryName(result.data.name);
        console.log(result.data);
    }).catch((error)=>{
        });
    }
    
      const wypis_galerii = categoryGalleries.map((element, index)=>{
        return(
          <OneGallery
          key={index}
          photoID={element.id}
          name={element.name}
          />
        )
      })

    return(
      <div className='stronaKategoria'>
        <Bar/>
        <p className='CatName' style={{fontSize:'4rem', backgroundColor:'rgb(192, 193, 196)'}}>{categoryName}</p>
        <div className='zdjecie'>
            {/* <p className='g_tekst'>KATEGORIA</p> */}
                {wypis_galerii} 
        </div>
      </div>
    )

}

export default Category_strona;