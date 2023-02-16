import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Cookies from "js-cookie";
import Bar from "../../../komponenty/NavBar.js";
import "./metaData.css"

export const MetaData = (props) => {
    const navigate = useNavigate();
    const [pictureMin, setPictureMin]=useState(null);
    

    useEffect(() => {
      const API = `http://127.0.0.1:5000/api/image/miniature/${props.photoIDs}`;
      axios.get(API, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
        .then((result) => {
          setPictureMin(result.data.image);
        //   setPictureMin(image);
          // console.log(result.data);
        })
        .catch((error) => {
          // console.error(error);
          if (error.message==='Request failed with status code 401'){
            navigate('/login');
        }
        });
    }, [props.photoIDs]);
  
    async function handleClick1() {
      navigate(`/photo/${props.photoIDs}`);
    }

    return (
      <div className="zdjecia" onClick={handleClick1}>
        {pictureMin ? <img src={pictureMin } alt='skill issue' /> : <p>Loading...</p> }
        <div className="opisZdj">
          {props.name}
        </div>
      </div>
    );
  };
  
  export default MetaData;