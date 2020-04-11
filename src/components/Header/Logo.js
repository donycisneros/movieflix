import React from "react";
import logo from "../../assets/images/movieflix.svg";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
