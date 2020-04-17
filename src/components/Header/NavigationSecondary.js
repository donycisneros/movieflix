import React, { useState } from "react";
import homeIcon from "../../assets/images/icons/home.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import trailersIcon from "../../assets/images/icons/trailers.svg";
import seenIcon from "../../assets/images/icons/seen.svg";
import moreIcon from "../../assets/images/icons/more.svg";

const NavigationSecondary = () => {
  const [secondaryNavigationMobile] = useState([
    { text: "Inicio", link: "/", icon: homeIcon },
    { text: "Buscar", link: "/search", icon: searchIcon },
    { text: "Próximamente", link: "/trailers", icon: trailersIcon },
    { text: "Visto", link: "/seen", icon: seenIcon },
    { text: "Más", link: "/more", icon: moreIcon },
  ]);

  const classLink = (link) =>
    window.location.pathname === link
      ? "navigation-tab active"
      : "navigation-tab";

  const navegationMobile = (
    <div className="secondary-navigation-mobile">
      {secondaryNavigationMobile.map(({ text, link, icon }) => (
        <a key={text} href={link} className={classLink(link)}>
          <img src={icon} alt={text} />
          <p>{text}</p>
        </a>
      ))}
    </div>
  );

  return (
    <div className="secondary-navigation-container">
      <div className="secondary-navigation">
        <div className="navigation-item">GIFT</div>
        <div className="navigation-item">KIDS</div>
        <div className="navigation-item">SEARCH</div>
        <div className="navigation-item">TOOLTIP</div>
        <div className="navigation-item">USER</div>
      </div>
      {navegationMobile}
    </div>
  );
};

export default NavigationSecondary;
