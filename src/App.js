import React from "react";
import Header from "./components/Header/Header";

const App = () => {
  let loop = [];
  for (let i = 0; i < 80; i++) {
    loop.push(i);
  }

  return (
    <div className="movieflix">
      <Header />
      {loop.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
  );
};

export default App;
