import React, { useEffect, useState } from "react";
import "./categories.css";
import { useNavigate } from "react-router-dom";
import Linjika from "./komponenty/linijka";
import Gora from "./komponenty/gorna_linijka";
import Bar from "../../komponenty/NavBar.js";
import Cookies from "js-cookie";
import axios from "axios";

function Categories() {
  let przekierunkowanie = useNavigate();
  const navigate = useNavigate();

  const API = "http://127.0.0.1:5000/api/category/";
  useEffect(() => {
    getCategories();
  }, []);
  const [kategorie, setCategories] = useState([]);

  function getCategories() {
    axios
      .get(API, {
        headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },
      })
      .then((result) => {
        setCategories(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      });
  }

  useEffect(() => {
    setCategories(kategorie);
  }, [kategorie]);

  const rysunek_linjiki = kategorie.map((element, index) => {
    return <Linjika key={index} name={element.name} parentID={element.id} />;
  });

  return (
    <div className="stronaKategorii">
      <Bar />
      <Gora />
      {rysunek_linjiki}
    </div>
  );

  /*const handleSubmit = (event) => {
      //przekierunkowanie("/https://www.twitch.tv/popo");
      //window.location.href="https://www.twitch.tv/popo";
      //window.location.href="http://localhost:3000/login"
      przekierunkowanie('/LOGIN');
      event.preventDefault();

      // validate the form values
      // call a login function
    }

  const [dane_l,set_dane_l] = useState([
    {nazwa: "Miasto", liczbaZdjec:"12"},
    {nazwa: "Zwierzęta", liczbaZdjec:"36"},
    {nazwa: "Natura", liczbaZdjec:"14"},
    {nazwa: "Samochody", liczbaZdjec:"3"},
    {nazwa: "Kamyk", liczbaZdjec:"856"},
    {nazwa: "Czerwo", liczbaZdjec:"234"},
    {nazwa: "Jasny", liczbaZdjec:"83"}
  ])
  
  const rysunek_linjiki = dane_l.map((element,index)=>{
    return(
      <Linjika 
      key={index}
      klucz={index}
      nazwa={element.nazwa}
      liczbaZdjec={element.liczbaZdjec}
      />
    )
  })

return (
    <div className='moj_div'>
      <Bar/>
      <Gora/>
      {rysunek_linjiki}
    </div>
    
    );*/
}

export default Categories;
