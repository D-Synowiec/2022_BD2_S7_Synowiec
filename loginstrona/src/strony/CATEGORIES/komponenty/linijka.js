import React,{useEffect,useState} from "react";
import "./linijka.css";
import { useNavigate } from "react-router";

function Linijka(props){

    const navigate=useNavigate();

    return(
        <div className='styl_linjiki'>
            <p className='styl_tekst1'>{props.nazwa}</p>
            <p className='styl_tekst1'>{props.liczbaZdjec} </p>
            
            <button className='styl_przycisk'
                onClick={() => {
                    navigate(`/category/${props.klucz}`)
                }}>Wejdź 
            </button>
        </div>
    )
}

export default Linijka