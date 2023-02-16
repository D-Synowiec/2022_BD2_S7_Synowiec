import React,{useEffect,useState} from "react";
import "./searchphoto.css"
import Bar from "../../komponenty/NavBar.js";
import Cookies from "js-cookie";
import axios from 'axios';
import Photo from "../GALLERY/komponenty/metaData.js";
import {useNavigate} from "react-router-dom";

const SearchPhoto = () => {
  const [searchFraze, setSearch] = useState();
  const [photoInfo, setPhotoInfo]=useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(searchFraze);


    const API = 'http://127.0.0.1:5000/api/find';
          axios.post(API, {name: searchFraze, type: 2}, {'headers': {'Authorization': 'Bearer ' + Cookies.get("Ciastko")}}).then((result) =>
          {
            setPhotoInfo(result.data);
            // console.log(result.data);
          }).catch((error)=>{
            if (error.message==='Request failed with status code 401'){
              navigate('/login');
          }

          });

  }

  const jednoPhoto = photoInfo.map((element, index)=>{
    return(
      <Photo 
      key={index}
      photoIDs={element.id}
      name={element.name}
      />
    )
  })  

  return (
    <>
        <Bar/>
        <div className='searchphotoStrona'>
        <div className='tekst'>
            <h1 className='naglowek'>Zdjęcie:</h1>
            <div className='opis'>

            <form className='searchTab' onSubmit={handleSubmit}>
                <input className='input'
                  type="text"
                  value={searchFraze}
                  onChange={handleSearchChange}
                />
                <button className='przycisk' type="submit">Wyszukaj</button>
              </form>

            </div>
        </div>
        <div className="zdjeciaWyswietlane">
          {jednoPhoto}
        </div>
    </div>
    </>
  )
}

export default SearchPhoto