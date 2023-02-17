import React, { useEffect, useState } from "react";
import "./linijka.css";
import { useNavigate } from "react-router";
import ChildCategory from "./childCategory.js";
import Cookies from "js-cookie";
import axios from "axios";

function Linijka(props) {
  const navigate = useNavigate();

  const API = `http://127.0.0.1:5000/api/category/${props.parentID}/child`;
  useEffect(() => {
    getChildren();
  }, []);
  const [children, setChildren] = useState([]);

  function getChildren() {
    axios
      .get(API, {
        headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },
      })
      .then((result) => {
        setChildren(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      });
  }

  useEffect(() => {
    setChildren(children);
  }, [children]);

  const childrenCats = children.map((element, index) => {
    return (
      <ChildCategory
        key={index}
        childID={element.id}
        name={element.name}
        // parent={element.CategoryId}
      />
    );
  });

  return (
    <>
      <div className="styl_linjiki">
        <p className="styl_tekst1">{props.name}</p>

        <button
          className="styl_przycisk"
          onClick={() => {
            navigate(`/category/${props.parentID}`);
          }}
        >
          Wejdź
        </button>
      </div>
      <div className="styl_dzieciKat">{childrenCats}</div>
    </>
  );
}

export default Linijka;
