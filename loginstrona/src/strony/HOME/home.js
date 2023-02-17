import React, { useEffect, useState } from "react";
import Bar from "../../komponenty/NavBar.js";
import "./home.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [name, setName] = useState([]);
  const API = "http://127.0.0.1:5000/api/user/me";
  const navigate = useNavigate();

  useEffect(() => {
    getUsername();
  }, []);

  function getUsername() {
    axios.get(API, {headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },}).then((result) => {
        setName(result.data.primary_name);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      });
  }

  return (
    <div className="homeStrona">
      <Bar />
      <div className="tekst">
        <h1 className="naglowek">Dzień dobry {name} !</h1>
        <div className="opis">
          Ostatnia aktualizacja:
          <br />
          <br />
          * Strony galerii
          <br />
          <br />
          * Lista galerii
          <br />
          <br />
          * Lista kategorii
          <br />
          <br />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
