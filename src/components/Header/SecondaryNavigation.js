import React from "react";

const SecondaryNavigation = () => {
  return (
    <div className="secondary-navigation">
      <div className="navigation-item">GIFT</div>
      <div className="navigation-item">
        <a href="/kids" className="item-kids">
          Niños
        </a>
      </div>
      <div className="navigation-item">SEARCH</div>
      <div className="navigation-item">TOOLTIP</div>
      <div className="navigation-item">USER</div>
    </div>
  );
};

export default SecondaryNavigation;
