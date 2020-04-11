import React from "react";
import Logo from "./Logo";
import PrimaryNavigation from "./PrimaryNavigation";

const Header = () => {
  return (
    <header>
      <Logo />
      {/* <h1>Movieflix</h1> */}
      <PrimaryNavigation />
    </header>
  );
};

export default Header;
