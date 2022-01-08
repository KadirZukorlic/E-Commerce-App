import React from "react";
import { useHistory } from "react-router-dom";
import ManParfume from "./../../../src/assets/ManParfume.jpg";
import WomanParfume from "./../../../src/assets/WomanParfume.jpg";
import "./styles.scss";

const Directory = (props) => {
  const history = useHistory();

  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ManParfume})` }}>
          <a onClick={() => history.push('/search/mens')}>Man Shop</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${WomanParfume})` }}
        >
          <a onClick={() => history.push('/search/womens')}>Woman Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
