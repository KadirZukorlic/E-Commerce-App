import React from "react";
import { Link } from "react-router-dom";
import ManParfume from "./../../../src/assets/ManParfume.jpg";
import WomanParfume from "./../../../src/assets/WomanParfume.jpg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ManParfume})` }}>
          <a>Man Shop</a>
        </div>
        <div style={{ backgroundImage: `url(${WomanParfume})` }}></div>
        <a>Man Shop</a>
      </div>
    </div>
  );
};

export default Directory;
