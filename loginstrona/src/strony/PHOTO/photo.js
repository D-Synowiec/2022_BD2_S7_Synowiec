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
    const [pictureData, setPictureData]=useState('');

    useEffect(() => {
        const API = `http://127.0.0.1:5000/api/photo/${params.id}`;
        axios.get(API, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
          .then((result) => {
            setPicture(result.data.image);
            // console.log(result.data);
          })
          .catch((error) => {
            console.error(error);
          });

          const API2 = `http://127.0.0.1:5000/api/photo/${params.id}/info`;
          axios.get(API2, { headers: { Authorization: `Bearer ${Cookies.get('Ciastko')}` } })
            .then((result) => {
              setPictureData(result.data);
              // console.log(result.data);
            })
            .catch((error) => {
              console.error(error);
            });
      }, [params.id]);
    

    return (
        <>
            <Bar/>
            <div className="stronaPhotoDisp">
              <p className="nazwaPhoto">{pictureData.name}</p>
                <div className="photoDisplay">
                    {picture ? <img className="fotka" src={picture } alt='skill issue' /> : <p>Loading...</p> }
                    <div className="opisZdj">
                        
                    </div>
                </div>
                <div className="opisPhoto">
                  <p className="ownerParagraph">Autor: {pictureData.owner}</p>
                  <div className="tagDisplay">
                    <p className="tagParagraph">Tagi:
                      tagi tu, tu i tu
                    </p>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Photo;