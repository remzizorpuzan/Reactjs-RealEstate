import React from "react";
import headPhoto from "./../photos/banner_02.jpg";
import "./styles.css";

const HeadPhoto3 = () => {
  return (
    <div>
      {/* Use the imported image */}
      <img src={headPhoto} alt="" className="head-photo" />
    </div>
  );
};

export default HeadPhoto3;
