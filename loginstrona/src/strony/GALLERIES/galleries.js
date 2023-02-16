import React,{useEffect,useState} from "react";
import axios from 'axios';
import styl from "./galleries_style.module.css";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import Linjika from "./komponenty/linijka"
import Gora from "./komponenty/gorna_linijka"
import Bar from "../../komponenty/NavBar.js";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
})

function Galeria_strona(){
  const navigate = useNavigate();
  const API = 'http://127.0.0.1:5000/api/gallery/me';
  const API2 = 'http://127.0.0.1:5000/api/gallery';
  let przekierunkowanie = useNavigate();
    useEffect(() => {
    getGalleries();
  },[]);
  const [galerie, setGalleries]=useState([]);
  const [newGalleryName, setNewGalleryName]=useState(['']);
  const [active, setActive] = useState(false);


     function getGalleries(){

        axios.get(API,{'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
        {
            setGalleries(result.data);
            // console.log(result.data);
        }).catch((error)=>{
            });
    }



  useEffect(() => {
    setGalleries(galerie);
  }, [galerie]);

  const rysunek_linjiki = galerie.map((element,index)=>{
    return(
      <Linjika 
      key={index}
      klucz={element.id}
      // miniaturka={element.miniaturka}
      name={element.name}
      // data={element.data}
      // rozmiar={element.rozmiar}
      // autor={element.autor}
      />
    )
  })

  const handleNewGalleryNameChange = (event) => {
    setNewGalleryName(event.target.value);
    setActive(false);
  }

  const HandleSubmit = async (event) => {
    event.preventDefault();
    if(newGalleryName==''){
      setActive(true);
      return;
    }
    if (!newGalleryName.replace(/\s/g, '').length) {
      setActive(true);
    }
    
    else{
      //gallery_owner: '2' -> trzeba??
      axios.post(API2, {name: newGalleryName}, {'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
      {
        getGalleries();
      }).catch((error)=>{
        // console.log(error.message);
        if (error.message==='Request failed with status code 409'){
          setActive(true);
        }
      });

    }

  }

return (
    <div className={styl.moj_div}>
      <Bar/>

      <div style={{display:'flex', justifyContent:'flex-end', backgroundColor:'rgb(47, 49, 59)'}}>
        <form className='nazwaNowejGalerii' onSubmit={HandleSubmit}>
          {/* <label>Nazwa:</label> */}
          <input className='input'
            type="text"
            value={newGalleryName}
            onChange={handleNewGalleryNameChange}
          />
          <button className={styl.przyciskGalerii} style={{backgroundColor: active ? "rgb(200, 30, 30)" : "white"}}>Dodaj galerię</button>
        </form>

        
      </div>

      <Gora/>
      {rysunek_linjiki}
    </div>
    
    );
}

export default Galeria_strona