import React from "react";
import Logo from "./Logo";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import { useScroll } from "../../hooks/useScroll";

const Header = () => {
  useScroll(".nav-header", "scroll");

  return (
    <header className="nav-header">
      <Logo />
      {/* <h1>Movieflix</h1> */}
      <PrimaryNavigation />
      <SecondaryNavigation />
    </header>
  );
};

export default Header;
