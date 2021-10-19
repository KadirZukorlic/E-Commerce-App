import React from 'react';
import Header from './../Header/index';
import Footer from '../Footer';

const MainLayout = (props) => {
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
