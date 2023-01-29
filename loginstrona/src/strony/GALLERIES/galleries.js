import React,{useEffect,useState} from "react";
import axios from 'axios';
import styl from "./galleries_style.module.css";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import Linjika from "./komponenty/linijka"
import Gora from "./komponenty/gorna_linijka"
import Bar from "../../komponenty/NavBar.js";

function Galeria_strona(){
  const API = 'http://127.0.0.1:5000/api/gallery/me';
  let przekierunkowanie = useNavigate();
  const [galerie, setGalleries]=useState();

  useEffect(() => {
    getGalleries();
  },[]);

    function getGalleries(){
      axios.get(API,{
        'headers': {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${Cookies.get("Ciastko")}`
          },
          
        }}).then((result) => {
          setGalleries(result.data);
        }).catch((error) => {console.log('error bro')});

        console.log('koniec axios');
        console.log(galerie);
    }

    // function getGalleries(){
    //   axios.get(API,{
    //     'headers': {
    //       'Authorization': 'Bearer' + Cookies.get("Ciastko").key,
          
    //     }}).then((result) => {
    //       setGalleries(result.data);
    //     }).catch((error) => {console.log('error bro')});
    // }

    // async function fetchData(API) {
    //     const response = await fetch(API, {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `${Cookies.get("Ciastko")}`
    //         },
    //       });
    //       const data = await response.json();
    //       console.log(data);
    //       return data;
    // }

  const data = getGalleries();
  const [dane_l,set_dane_l] = useState([{klucz:1, name:data},{klucz:2, name:'zdjecia'},{klucz:3, name:'galeira3'}]);

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