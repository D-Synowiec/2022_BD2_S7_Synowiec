import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import Bar from "../../komponenty/NavBar.js";
import "./photo.css"
import popo from "../../pliki/popo.jpg"

export const Photo = () => {
    const params = useParams();
    // console.log(params.id);
    const [picture, setPicture]=useState(null);

    useEffect(() => {
        const API = `http://127.0.0.1:5000/api/photo/${params.id}`;
        axios.get(API, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
          .then((result) => {
            setPicture(result.data.image);
            console.log(result.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [params.id]);

    return (
        <>
            <Bar/>
                <div className="photoDisplay">
                    {picture ? <img className="fotka" src={picture } alt='skill issue' /> : <p>Loading...</p> }
                    <div className="opisZdj">
                        
                    </div>
                </div>
        </>
    )
}

export default Photo;