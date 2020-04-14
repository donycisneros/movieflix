import React from "react";
import movieflix from "../../assets/images/logo/movieflix.svg";
import movieflixMobile from "../../assets/images/logo/movieflix-mobile.svg";

const Logo = () => {
  return (
    <a href="/" className="logo">
      {/* <img src={movieflix} alt="logo" /> */}
      <img src={movieflixMobile} alt="logo" />
    </a>
  );
};

export default Logo;
