import React from "react";
import headPhoto from "./../photos/banner_01.jpg";
import "./styles.css";

const HeadPhoto2 = () => {
  return (
    <div>
      {/* Use the imported image */}
      <img src={headPhoto} alt="" className="head-photo" />
    </div>
  );
};

export default HeadPhoto2;
