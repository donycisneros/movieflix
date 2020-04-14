import React from "react";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import { useScroll } from "../../hooks/useScroll";

const Header = () => {
  useScroll(".nav-header", "scroll");

  return (
    <header className="nav-header">
      <PrimaryNavigation />
      {/* <SecondaryNavigation /> */}
    </header>
  );
};

export default Header;
