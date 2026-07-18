import React from "react";
import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cricket App</h1>

      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;