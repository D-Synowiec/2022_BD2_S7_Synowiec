import React, { useState } from "react";
import Bar from "../../komponenty/NavBar.js";
import "./uploadPhoto.css";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  function uploadSelectedImage(){
    
    console.log('wysylam zdjecie');
  }

  return (
    <>
    <Bar/>
    <div className="uploadStrona">
      <h1 style={{fontSize:'2rem'}}>Dodaj zdjęcie</h1>
      <br/>
      {selectedImage && (
        <div className="inputy">
        <img alt="chosenImage" width={"70%"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Odrzuć</button>
        <button onClick={()=>uploadSelectedImage()}>Dodaj</button>
        <br/><br/>
        </div>
      )}
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
    </>
  );
};

export default UploadAndDisplayImage;