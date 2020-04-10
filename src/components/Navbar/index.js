import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav role="navigation">
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
