import React, { useState } from "react";

const NavLinks = () => {
  const [navUrls] = useState([
    { id: 0, text: "Inicio", url: "/" },
    { id: 1, text: "Programas", url: "/tv" },
    { id: 2, text: "Peliculas", url: "/movies" },
    { id: 3, text: "Más recientes", url: "/latest" },
    { id: 4, text: "Mi lista", url: "/my-list" },
  ]);

  return (
    <ul>
      {navUrls.map(({ id, text, url }) => (
        <li key={id}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
