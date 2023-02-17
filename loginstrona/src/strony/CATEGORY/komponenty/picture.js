import React, { useEffect, useState } from "react";
import "./picture.css";

function picture(props) {
  return <img src={props.obrazek} className="fotka" />;
}

export default picture;
