import React, { useState } from "react";
import axios from 'axios';
import Bar from "../../komponenty/NavBar.js";
import "./uploadPhoto.css";

const UploadAndDisplayImage = () => {

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
    
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.owner);
    form.append('photo', formData.photo_file, formData.photo_file.name);
    
    axios.post('/api/submit-form', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="galleries"
          value={formData.owner}
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
      <button type="submit">Submit</button>
    </form>
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