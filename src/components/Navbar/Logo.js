import React from "react";
import movieflixLogo from "../../assets/media/movieflix.svg";

const Logo = () => {
  return (
    <a href="/" aria-label="Movieflix Logo">
      <img src={movieflixLogo} alt="Home Page" />
    </a>
  );
};

export default Logo;
