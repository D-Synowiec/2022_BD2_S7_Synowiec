import React,{useEffect,useState} from "react";
import styl from "./galleries_style.module.css";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import Linjika from "./komponenty/linijka"
import Gora from "./komponenty/gorna_linijka"
import Bar from "../../komponenty/NavBar.js";

function Galeria_strona(){
  const API = 'http://127.0.0.1:5000/api/gallery/me';
  let przekierunkowanie = useNavigate();

    const handleSubmit = (event) => {
      przekierunkowanie('/LOGIN');
      event.preventDefault();
    }

    async function fetchData(API) {
        const response = await fetch(API, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${Cookies.get("Ciastko")}`
            },
          });
          const data = await response.json();
          console.log(data);
          return data;
    }

  const data = fetchData(API);
  const [dane_l,set_dane_l] = useState([data]);

  const rysunek_linjiki = dane_l.map((element,index)=>{
    return(
      <Linjika 
      key={index}
      klucz={index}
      // miniaturka={element.miniaturka}
      name={element.name}
      // data={element.data}
      // rozmiar={element.rozmiar}
      // autor={element.autor}
      />
    )
  })

return (
    <div className={styl.moj_div}>
      <Bar/>
      <Gora/>
      {rysunek_linjiki}
    </div>
    
    );
}

export default Galeria_strona