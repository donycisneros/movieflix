import React from "react";
import movieflixMobile from "../../../assets/images/logo/movieflix-mobile.svg";

const LogoMobile = () => {
  return (
    <a href="/" className="logo">
      <img src={movieflixMobile} alt="logo" />
    </a>
  );
};

export default LogoMobile;
