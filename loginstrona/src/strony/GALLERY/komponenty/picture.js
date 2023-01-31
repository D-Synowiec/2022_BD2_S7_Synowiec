import React,{useEffect,useState} from "react";
import styl from "./picture_style.module.css";

function picture(props){

    return(
        <img src={props.obrazek} className={styl.fotka}/>
    )

}

export default picture