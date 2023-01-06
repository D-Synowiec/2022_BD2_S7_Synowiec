import React,{useEffect,useState} from "react";
import styl from "./linjika_style.module.css";
import zdj from "../../../pliki/popo.jpg";

function linjika(props){

    return(
        <div className={styl.styl_linjiki}>
            {/* <div className={styl.styl_paska}/> */}
            <img src={props.miniaturka} className={styl.styl_zdj}/>
            
            <p className={styl.styl_tekst1}>{props.tytul}</p>
            
            <p className={styl.styl_tekst1}>{props.data} </p>
            
            <p className={styl.styl_tekst1}>{props.rozmiar}</p>
            
            <p className={styl.styl_tekst1}>{props.autor}</p>
            
            <button className={styl.styl_przycisk}>Wejdź</button>
            {/* <div className={styl.styl_paska}/> */}
        </div>
    )
}

export default linjika