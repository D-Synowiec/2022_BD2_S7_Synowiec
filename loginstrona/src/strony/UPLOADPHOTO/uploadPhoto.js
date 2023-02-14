import React, { useState } from "react";
import axios from 'axios';
import "./uploadPhoto.css";
import {useParams} from 'react-router-dom';
import Bar from "../../komponenty/NavBar.js";
import Cookies from "js-cookie";

const UploadAndDisplayImage = () => {
  const params = useParams();

  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    size: '',
    resolution: '',
    galleries: '', //id
    extension: '',
    photo_file: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo_file: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('-handleSubmit');
    const form = new FormData();
    form.append('name', formData.name);
    form.append('owner', formData.owner);
    form.append('size', formData.size);
    form.append('resolution', formData.resolution);
    form.append('galleries', formData.galleries);
    form.append('extension', formData.extension);
    form.append('photo', formData.photo_file, formData.photo_file.name);

    // axios.post('/api/submit-form', form, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  };

  const handlePhotoSubmit = async (event) => {
    // console.log('-handlePhotoSubmit');
    if(formData.name==''){
      formData.name=formData.photo_file.name;
    }
    // console.log(Cookies.get("Ciastko").name);
    // formData.owner=;
    formData.size=formData.photo_file.size;
    // formData.resolution=
    formData.extension=formData.photo_file.type;
    formData.galleries=params.id;

    console.log(formData.photo_file);
    console.log(formData.name);
    console.log(formData.size);
    console.log(formData.extension);
    console.log(formData.galleries);
  }


  return (
    <>
    <Bar/>
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
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <button onClick={handlePhotoSubmit} type="submit">Dodaj zdjęcie</button>
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