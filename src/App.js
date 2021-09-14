import React from "react";

import Header from "./components/Header";
import Homepage from "././pages/Homepage";
import Directory from "./components/Directory";

import "./default.scss";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
