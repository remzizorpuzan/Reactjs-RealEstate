import React from "react";
import headPhoto from "./../photos/banner_03.png";
import "./styles.css";

const HeadPhoto = () => {
  return (
    <div>
      {/* Use the imported image */}
      <img src={headPhoto} alt="" className="head-photo" />
    </div>
  );
};

export default HeadPhoto;
