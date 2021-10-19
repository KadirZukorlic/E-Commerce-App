import React from 'react';
import Header from './../Header/index';
import Footer from '../Footer';

const MainLayout = (props) => {
  console.log(props, 'PROPS');
  return (
    <div>
      <Header {...props}/>
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
