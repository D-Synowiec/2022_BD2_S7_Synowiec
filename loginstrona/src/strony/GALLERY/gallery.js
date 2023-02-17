import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import styl from "./gallery_style.module.css";
import { useNavigate } from "react-router-dom";
import Bar from "../../komponenty/NavBar.js";
import MetaData from "./komponenty/metaData";

function Gallery_strona() {
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params.id);

  useEffect(() => {
    getMetaData();
  }, []);
  const [metaData, setMetaData] = useState([]);
  const [gallName, setGallName] = useState([]);

  const API = `http://127.0.0.1:5000/api/gallery/${params.id}/photos`; //`${}`
  const API2 = `http://127.0.0.1:5000/api/gallery/${params.id}`;
  function getMetaData() {
    axios
      .get(API, {
        headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },
      })
      .then((result) => {
        setMetaData(result.data.Photos);
        setGallName(result.data.name);
        // console.log(result.data);
      })
      .catch((error) => {});
  }

  const jeden_obrazek = metaData.map((element, index) => {
    return <MetaData key={index} photoIDs={element.id} name={element.name} />;
  });

  async function handleClick1() {
    navigate(`/uploadPhoto/${params.id}`);
  }

  async function handleClick2() {
    axios
      .delete(API2, {
        headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },
      })
      .then((result) => {
        navigate("/galleries");
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      });
  }

  return (
    <div className={styl.moj_div2}>
      <Bar />
      <div className={styl.moj_div}>
        <div
          className={styl.przycisk1}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button className={styl.przycisk} onClick={handleClick2}>
            Usuń galerię
          </button>
          <button className={styl.przycisk} onClick={handleClick1}>
            Dodaj zdjęcie
          </button>
        </div>
        <p className={styl.g_tekst}>{gallName}</p>
        <br />
        <div className={styl.wyswietlaneZdj}>{jeden_obrazek}</div>
      </div>
    </div>
  );
}

export default Gallery_strona;
