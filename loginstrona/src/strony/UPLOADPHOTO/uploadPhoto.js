import React, { useState } from "react";
import Bar from "../../komponenty/NavBar.js";
import "./uploadPhoto.css"

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);


  function uploadSelectedImage(){
    
    console.log('wysylam zdjecie');
  }

  return (
    <>
    <Bar/>
    <div className="uploadStrona">
      <h1>Dodaj zdjęcie</h1>
      {selectedImage && (
        <div>
        <img alt="chosenImage" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Odrzuć</button>
        <button onClick={()=>uploadSelectedImage()}>Dodaj</button>
        <br/><br/>
        <form onSubmit={()=>setSelectedGallery()}>
                <input className='input'
                  type="text"
                  value={selectedGallery}
                  onChange={(event) => {setSelectedGallery(event.target.value);console.log('upload poszedl');}}
                />
                <button className='przycisk' type="submit">Dodaj</button>
        </form>

        </div>
      )}
      <br />
     
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