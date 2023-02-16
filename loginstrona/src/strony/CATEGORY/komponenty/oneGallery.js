import React,{useEffect,useState} from "react";
// import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import MetaData from "../../GALLERY/komponenty/metaData.js";
import styl from "../../GALLERY/gallery_style.module.css";

function OneGallery(props){
  // const params = useParams();
  const navigate = useNavigate();
  // console.log(params.id); 

  useEffect(() => {getMetaData()},[]);
  const [metaData, setMetaData]=useState([]);
  const [gallName, setGallName]=useState([]);

  const API = `http://127.0.0.1:5000/api/gallery/${props.photoID}/photos`;//`${}`
  function getMetaData(){
    axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
    {
        setMetaData(result.data.Photos);
        setGallName(result.data.name)
        // console.log(result.data);
    }).catch((error)=>{
      if (error.message==='Request failed with status code 401'){
        navigate('/login');
    }
        });
  }
    
      const jeden_obrazek = metaData.map((element, index)=>{
        return(
          <MetaData 
          key={index}
          photoIDs={element.id}
          name={element.name}
          />
        )
      })

    return(
      <div className={styl.moj_div2}>
      <br/><p className='g_tekst' style={{fontSize:'2rem'}}>{props.name}</p>
        <div className={styl.moj_div}>
          <div className={styl.wyswietlaneZdj}>
            {jeden_obrazek}
          </div>
        </div>
      </div>
    )

}

export default OneGallery;