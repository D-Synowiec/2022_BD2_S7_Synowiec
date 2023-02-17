import React, { useEffect, useState } from "react";
import styl from "./gorna_linijka_style.module.css";

function gorna_linijka() {
  return (
    <>
      <div className={styl.styl_linjiki}>
        {/* <p className={styl.styl_tekstm}>ikona</p> */}

        <p className={styl.styl_tekst}>nazwa</p>

        {/* <p className={styl.styl_tekst}>data</p> */}

        {/* <p className={styl.styl_tekst}>rozmiar</p> */}

        {/* <p className={styl.styl_tekst}>autor</p> */}

        <p className={styl.styl_tekstp}></p>
      </div>
    </>
  );
}

export default gorna_linijka;
