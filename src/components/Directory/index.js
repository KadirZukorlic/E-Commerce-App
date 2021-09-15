import React from "react";
import ManParfume from "./../../../src/assets/ManParfume.jpg";
import WomanParfume from "./../../../src/assets/WomanParfume.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ManParfume})` }}>
          <a>Man Shop</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${WomanParfume})` }}
        >
          <a>Woman Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
