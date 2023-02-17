import React, { useState } from "react";
import axios from "axios";
import "./uploadPhoto.css";
import { useParams } from "react-router-dom";
import Bar from "../../komponenty/NavBar.js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UploadAndDisplayImage = () => {
  const params = useParams();
  const API = "http://127.0.0.1:5000/api/photo/add";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    size: "",
    galleries: "", //id
    extension: "",
    photo_file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setFormData({
      ...formData,
      owner: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo_file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    if (!(formData.photo_file == null)) {
      e.preventDefault();
      const form = new FormData();
      form.append("name", formData.name);
      form.append("owner", formData.owner);
      form.append("size", formData.size);
      form.append("galleries", formData.galleries);
      form.append("extension", formData.extension);
      form.append("photo_file", formData.photo_file, formData.photo_file.name);

      axios.post(API, form, {headers: { Authorization: "Bearer " + Cookies.get("Ciastko") },}).then((result) => {
          navigate(`/gallery/${params.id}`);
        })
        .catch((error) => {
          if (error.message === "Request failed with status code 401") {
            navigate("/login");
          }
          // console.log(error.response);
        });
    }
  };

  const handlePhotoSubmit = async (event) => {
    if (!(formData.photo_file == null)) {
      if (formData.name == "") {
        formData.name = formData.photo_file.name.slice(0,`${formData.photo_file.name}`.length-4);
        // console.log(formData.photo_file.name.slice(0,`${formData.photo_file.name}`.length-4));
      }
      if (formData.owner == "") {
        formData.owner = "unknown";
      } else {
        formData.owner = formData.owner;
      }
      formData.size = formData.photo_file.size;
      formData.extension = formData.photo_file.type.slice(6);
      formData.galleries = params.id;

      // console.log(formData);
      // console.log(formData.photo_file);
    }
  };

  return (
    //dodac input do ownera
    <>
      <Bar />
      <div className="uploadStrona">
        <form onSubmit={handleSubmit}>
          <div>
            Nazwa:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            Autor:
            <input
              type="text"
              // name="name"
              value={formData.owner}
              onChange={handleChange2}
            />
          </div>
          <div>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button onClick={handlePhotoSubmit} type="submit">
            Dodaj zdjęcie
          </button>
        </form>
      </div>
    </>
  );

  // const [selectedImage, setSelectedImage] = useState(null);

  // function uploadSelectedImage(){
  //   // console.log(selectedImage);
  //   console.log(selectedImage.name);
  // }

  // return (
  //   <>
  //   <Bar/>
  //   <div className="uploadStrona">
  //     <h1 style={{fontSize:'2rem'}}>Dodaj zdjęcie</h1>
  //     <br/>
  //     {selectedImage && (
  //       <div className="inputy">
  //       <img alt="chosenImage" width={"30%"} src={URL.createObjectURL(selectedImage)} />
  //       <br />
  //       <button onClick={()=>setSelectedImage(null)}>Odrzuć</button>
  //       <button onClick={()=>uploadSelectedImage()}>Dodaj</button>
  //       <br/><br/>
  //       </div>
  //     )}

  //     <br />
  //     <input
  //       type="file"
  //       accept="image/*"
  //       name="myImage"
  //       onChange={(event) => {
  //         console.log(event.target.files[0]);
  //         setSelectedImage(event.target.files[0]);
  //       }}
  //     />
  //   </div>
  //   </>
  // );
};

export default UploadAndDisplayImage;
