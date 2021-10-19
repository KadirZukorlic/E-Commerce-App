import React from 'react';
import Header from './../Header/index';
import Footer from '../Footer';

const HomepageLayout = (props) => {
  console.log(props, 'PROPS');
  return (
    <div className="fullHeight">
      <Header {...props}/>
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
