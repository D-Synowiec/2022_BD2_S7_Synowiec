import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import Bar from "../../../komponenty/NavBar.js";
import "./metaData.css"

export const MetaData = (props) => {
    const [pictureMin, setPictureMin]=useState(null);
    

    useEffect(() => {
      const API = `http://127.0.0.1:5000/api/image/miniature/${props.photoIDs}`;
      axios.get(API, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
        .then((result) => {
          setPictureMin(result.data.image);
        //   setPictureMin(image);
        //   console.log(result.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [props.photoIDs]);
  
    return (
      <div className="zdjecia">
        {pictureMin ? <img src={pictureMin } alt='skill issue' /> : <p>Loading...</p> }
      </div>
    );
  };
  
  export default MetaData;