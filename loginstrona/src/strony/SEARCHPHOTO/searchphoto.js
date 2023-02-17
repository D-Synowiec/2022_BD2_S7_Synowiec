import React, { useEffect, useState } from "react";
import "./searchphoto.css";
import Bar from "../../komponenty/NavBar.js";
import Cookies from "js-cookie";
import axios from "axios";
import Photo from "../GALLERY/komponenty/metaData.js";
import GalleryDisp from "../GALLERIES/komponenty/linijka.js"
import { useNavigate } from "react-router-dom";

const SearchPhoto = () => {
  const [searchFraze, setSearch] = useState('');
  const [photoInfo, setPhotoInfo] = useState([]);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [finalChoice, setFinalChoice] = useState(2); //1-gallery, 2-photo, 3-tag
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(finalChoice);
    setPhotoInfo([]);

    const API = "http://127.0.0.1:5000/api/find";
    if(finalChoice==1){
      axios.post(API,{ name: searchFraze, type: 1 },{ headers: { Authorization: "Bearer " + Cookies.get("Ciastko") } }).then((result) => {
        setPhotoInfo(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      }); 
    }
    if(finalChoice==2){
      axios.post(API,{ name: searchFraze, type: 2 },{ headers: { Authorization: "Bearer " + Cookies.get("Ciastko") } }).then((result) => {
        setPhotoInfo(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      }); 
    }
    if(finalChoice==3){
      axios.post(API,{ name: searchFraze, type: 3 },{ headers: { Authorization: "Bearer " + Cookies.get("Ciastko") } }).then((result) => {
        setPhotoInfo(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      }); 
    }
  };

  const handleChange1 = () => {
    if(!checked1){
      setPhotoInfo([]);
    }
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
    setFinalChoice(1);
  };

  const handleChange2 = () => {
    if(!checked2){
      setPhotoInfo([]);
    }
    setChecked2(true);
    setChecked1(false);
    setChecked3(false);
    setFinalChoice(2);
  };

  const handleChange3 = () => {
    if(!checked3){
      setPhotoInfo([]);
    }
    setChecked3(true);
    setChecked1(false);
    setChecked2(false);
    setFinalChoice(3);
  };

  function ZwrotWyszukania() {
    if(finalChoice==1){
      const jednaGaleria = photoInfo.map((element, index) => {
        return <GalleryDisp key={index} klucz={element.id} name={element.name} />;
      });
      return (
        <div className="galerieWyswietlane">
          {jednaGaleria}
        </div>
        );
    }
    if(finalChoice==2){
      const jednoPhoto = photoInfo.map((element, index) => {
        return <Photo key={index} photoIDs={element.id} name={element.name} />;
      });
      return (
        <div className="zdjeciaWyswietlane">
          {jednoPhoto}
        </div>
        );
    }
    if(finalChoice==3){
      const jednoPhotoTag = photoInfo.map((element, index) => {
        return <Photo key={index} photoIDs={element.photo.id} name={element.photo.name} />;
      });
      return (
        <div className="zdjeciaWyswietlane">
          {jednoPhotoTag}
        </div>
        );
    }
  }

  return (
    <>
      <Bar />
      <div className="searchphotoStrona">
        <div className="tekst">
          <h1 className="naglowek">Wyszukaj:</h1>

          <div className="wyborWyszukania">
          <div className="inputTyp"><input
            type="checkbox"
            checked={checked1}
            onChange={handleChange1}
          />Galerie</div>
          <div className="inputTyp"><input
            type="checkbox"
            checked={checked2}
            onChange={handleChange2}
          />Zdjęcia</div>
          <div className="inputTyp"><input
            type="checkbox"
            checked={checked3}
            onChange={handleChange3}
          />Tagi</div>
          </div>

          <div className="opis">
            <form className="searchTab" onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                value={searchFraze}
                onChange={handleSearchChange}
              />
              <button className="przycisk" type="submit">
                Wyszukaj
              </button>
            </form>
          </div>
        </div>
        <div className="zwrotka">
          {ZwrotWyszukania()}
        </div>
      </div>
    </>
  );
};

export default SearchPhoto;
