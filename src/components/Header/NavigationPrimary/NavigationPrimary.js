import React from "react";
import PrimaryDesktop from "./PrimaryDesktop";
import PrimaryTablet from "./PrimaryTablet";
import PrimaryMobile from "./PrimaryMobile";

const NavigationPrimary = () => {
  return (
    <div className="primary-navigation">
      <PrimaryDesktop />
      <PrimaryTablet />
      <PrimaryMobile />
    </div>
  );
};

export default NavigationPrimary;
