import React from "react";
import movieflix from "../../../assets/images/logomovieflix.svg";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={movieflix} alt="logo" />
    </a>
  );
};

export default Logo;
