import React from "react";
import Header from "./components/Header/Header";

const App = () => {
  let loop = [];
  for (let i = 0; i < 80; i++) {
    loop.push(i);
  }
  const loopMap = loop.map((l) => <p key={l}>{l}</p>);

  const styles = {
    paddingTop: "50px",
    paddingBottom: "56px",
    height: "100%",
  };

  return (
    <div className="movieflix">
      <Header />
      <div style={styles}>{loopMap}</div>
    </div>
  );
};

export default App;
