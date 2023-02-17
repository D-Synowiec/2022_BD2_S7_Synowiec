import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const API = "http://localhost:5000/api/user/logout";
  const API2 = "http://localhost:5000/api/user/me";
  const navigate = useNavigate();
  const [myName, setMyName] = useState([]);

  useEffect(() => {
    getAuth();
  }, []);

  function getAuth() {
    axios
      .get(API2, {
        headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },
      })
      .then((result) => {
        setMyName(result.data.primary_name);
        // console.log(result.data.primary_name);
      })
      .catch((error) => {
        // console.log(error);
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      });
  }

  async function handleClick1() {
    navigate("/options");
  }
  async function handleClick2() {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("Ciastko")}`,
      },
    });
    Cookies.remove("Ciastko");
    //   console.log(Cookies.get("Ciastko"));

    navigate("/logout");
  }

  return (
    <nav className="navbar">
      <Link to="/home">Strona Główna</Link>
      <Link to="/galleries">Galerie</Link>
      <Link to="/categories">Kategorie</Link>
      <Link to="/search-photo">Wyszukaj</Link>
      <div className="links">
        <button onClick={handleClick1}>Opcje</button>
        <button onClick={handleClick2}>Wyloguj</button>
      </div>
    </nav>
  );
};

export default NavBar;
