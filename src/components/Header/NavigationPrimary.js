import React, { useState } from "react";
import Logo from "./Logo";

const NavigationPrimary = () => {
  const [navigationLinks] = useState([
    { id: 0, text: "Inicio", url: "/browse", className: "home" },
    { id: 1, text: "Programas", url: "/shows", className: "shows" },
    { id: 2, text: "Películas", url: "/movies", className: "movies" },
    { id: 3, text: "Más recientes", url: "/latest", className: "latest" },
    { id: 4, text: "Mi lista", url: "/my-list", className: "my-list" },
  ]);

  return (
    <div className="primary-navigation">
      <Logo />
      <ul className="navigation-tabs">
        {navigationLinks.map(({ id, text, url, className }) => (
          <li key={id} className={`navigation-item ${className}`}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationPrimary;
