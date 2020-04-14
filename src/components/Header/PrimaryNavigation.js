import React, { useState } from "react";
import Logo from "./Logo";

const PrimaryNavigation = () => {
  const [navUrls] = useState([
    { id: 0, text: "Inicio", url: "/browse" },
    { id: 1, text: "Programas", url: "/tv" },
    { id: 2, text: "Películas", url: "/movies" },
    { id: 3, text: "Más recientes", url: "/latest" },
    { id: 4, text: "Mi lista", url: "/my-list" },
  ]);

  return (
    <div>
      <Logo />
      {/* <ul className="primary-navigation">
        {navUrls.map(({ id, text, url }) => (
          <li key={id} className="navigation-item">
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default PrimaryNavigation;
