import React from "react";
import SecondaryDesktop from "./SecondaryDesktop";
import SecondaryTablet from "./SecondaryTablet";
import SecondaryMobile from "./SecondaryMobile";

const NavigationSecondary = () => {
  return (
    <div className="secondary-navigation">
      <SecondaryDesktop />
      <SecondaryTablet />
      <SecondaryMobile />
    </div>
  );
};

export default NavigationSecondary;
