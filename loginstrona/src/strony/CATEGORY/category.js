import React, { useEffect, useState } from "react";
import "./category.css";
import { useNavigate } from "react-router-dom";
import Fotka from "./komponenty/picture.js";
import OneGallery from "./komponenty/oneGallery";
import Bar from "../../komponenty/NavBar.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Category_strona() {
  const params = useParams();
  const navigate = useNavigate();

  const [addGalName, setAddGalName] = useState([""]);
  const [removeGalName, setRemoveGalName] = useState([""]);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    getCategoryGalleries();
  }, []);
  const [categoryGalleries, setCategoryGalleries] = useState([]);
  const [categoryName, setCategoryName] = useState([]);

  const API = `http://127.0.0.1:5000/api/category/${params.id}`;
  function getCategoryGalleries() {
    axios
      .get(API, {
        headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },
      })
      .then((result) => {
        setCategoryGalleries(result.data.galleries);
        setCategoryName(result.data.name);
        // console.log(result.data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          navigate("/login");
        }
      });
  }

  const wypis_galerii = categoryGalleries.map((element, index) => {
    return <OneGallery key={index} photoID={element.id} name={element.name} />;
  });

  const handleRemove = (event) => {
    setRemoveGalName(event.target.value);
    setActive2(false);
  };

  const handleAdd = (event) => {
    setAddGalName(event.target.value);
    setActive(false);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    if (addGalName == "") {
      setActive(true);
      return;
    }
    if (!addGalName.replace(/\s/g, "").length) {
      setActive(true);
    } else {
      axios.post(API,{ GalleryName: addGalName },{ headers: { Authorization: "Bearer " + Cookies.get("Ciastko") } }).then((result) => {                   //!!!!!!!!!!!!
          console.log('add');
          
        })
        .catch((error) => {
          if (error.message === "Request failed with status code 401") {
            navigate("/login");
          }
        });
    }
  };

  const HandleSubmit2 = async (event) => {
    event.preventDefault();
    if (removeGalName == "") {
      setActive2(true);
      return;
    }
    if (!removeGalName.replace(/\s/g, "").length) {
      setActive2(true);
    } else {
      axios.delete(API,{ GalleryName: addGalName },{ headers: { Authorization: "Bearer " + Cookies.get("Ciastko") } }).then((result) => {
          console.log('remove');

        })
        .catch((error) => {
          // if (error.message === "Request failed with status code 401") {
          //   navigate("/login");
          // }                                                                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          // if (error.message == "Request failed with status code 404") {
          //   setActive2(true);
          // }
        });
    }
  };

  return (
    <>
    <Bar />
    <div className="stronaKategoria">
      <div className="galleryManager">
        <form className="nazwaDodawanejGalerii" onSubmit={HandleSubmit}>
            <input
              className="input"
              type="text"
              value={addGalName}
              onChange={handleAdd}
            />
            <button
              className="przyciskGalerii"
              style={{ backgroundColor: active ? "rgb(200, 30, 30)" : "white" }}
            >
              Dodaj galerię
            </button>
        </form>

        <form className="nazwaUsuwanejGalerii" onSubmit={HandleSubmit2}>
            <input
              className="input"
              type="text"
              value={removeGalName}
              onChange={handleRemove}
            />
            <button
              className="przyciskGalerii2"
              style={{
                backgroundColor: active2 ? "rgb(200, 30, 30)" : "white",
              }}
            >
              Usuń galerię
            </button>
          </form>
      </div>
      <p
        className="CatName"
        style={{ fontSize: "4rem", backgroundColor: "rgb(192, 193, 196)" }}
      >
        {categoryName}
      </p>
      <div className="zdjecie">
        {/* <p className='g_tekst'>KATEGORIA</p> */}
        {wypis_galerii}
      </div>
    </div>
    </>
  );
}

export default Category_strona;
