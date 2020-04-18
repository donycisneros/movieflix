import React, { useState } from "react";
import { Home, Search, Trailers, Seen, More } from "./MobileIcons";

const NavigationSecondary = () => {
  const [secondaryNavigationMobile] = useState([
    { text: "Inicio", link: "/", icon: Home },
    { text: "Buscar", link: "/search", icon: Search },
    { text: "Próximamente", link: "/trailers", icon: Trailers },
    { text: "Visto", link: "/seen", icon: Seen },
    { text: "Más", link: "/more", icon: More },
  ]);

  const classActive = (link) =>
    window.location.pathname === link
      ? "navigation-tab active"
      : "navigation-tab";

  const navigationMobile = (
    <div className="secondary-navigation-mobile">
      {secondaryNavigationMobile.map(({ text, link, icon }) => (
        <a key={text} href={link} className={classActive(link)}>
          <span>{icon}</span>
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
      {navigationMobile}
    </div>
  );
};

export default NavigationSecondary;
