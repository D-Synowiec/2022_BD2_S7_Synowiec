import React,{useEffect,useState} from "react";
import "./gorna_linijka.css";

function gorna_linijka(){
    return(
        <div className='styl_linjiki' style={{backgroundColor:'rgb(47, 49, 59)'}}>
            <p className='styl_tekst'>nazwa</p>
            {/* <p className='styl_tekst'>liczba zdjęć</p> */}
            <p className='styl_tekstp'></p>
        </div>
    )
}

export default gorna_linijka