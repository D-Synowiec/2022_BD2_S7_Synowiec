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
    
    return (
        <>
            <Bar/>
            <div className="photoDisplay">
                <img src={popo} className='fotka'/>
            </div>
        </>
    )
}

export default Photo;