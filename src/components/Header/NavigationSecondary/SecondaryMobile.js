import React, { useState } from "react";
import { Home, Search, Trailers, Seen, More } from "../NavIcons/IconsMobile";

const SecondaryMobile = () => {
  const [navigationItems] = useState([
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
      {navigationItems.map(({ text, link, icon }) => (
        <a key={text} href={link} className={classActive(link)}>
          <span>{icon}</span>
          <p>{text}</p>
        </a>
      ))}
    </div>
  );

  return navigationMobile;
};

export default SecondaryMobile;
