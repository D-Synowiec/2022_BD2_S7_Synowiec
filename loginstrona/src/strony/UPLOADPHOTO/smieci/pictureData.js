import React, { useEffect, useState } from "react";

export const PictureData = (props) => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <div>
      <form className="formularz" onSubmit={() => setSelectedGallery()}>
        <input
          className="input"
          type="text"
          value={selectedGallery}
          onChange={(event) => {
            console.log("galeria:" + selectedGallery);
          }}
        />
        <button className="przycisk" type="submit">
          Wpisz galerię
        </button>
      </form>
      <br />
      <form className="formularz" onSubmit={() => setSelectedCategory()}>
        <input
          className="input"
          type="text"
          value={selectedCategory}
          onChange={(event) => {
            setSelectedCategory(event.target.value);
            console.log("kategoria:" + selectedCategory);
          }}
        />
        <button className="przycisk" type="submit">
          Wpisz kategorię
        </button>
      </form>

      <br />
      <form className="formularz" onSubmit={() => setSelectedTag()}>
        <input
          className="input"
          type="text"
          value={selectedTag}
          onChange={(event) => {
            setSelectedTag(event.target.value);
            console.log("tag:" + selectedTag);
          }}
        />
        <button className="przycisk" type="submit">
          Wpisz tag
        </button>
      </form>
    </div>
  );
};

export default PictureData;
