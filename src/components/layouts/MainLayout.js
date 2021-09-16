import React from "react";
import Header from "./../Header/index";

const MainLayout = (props) => {
    console.log(props, 'PROPS')
  return (
    <div className="fullHeight">
      <Header />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default MainLayout;
