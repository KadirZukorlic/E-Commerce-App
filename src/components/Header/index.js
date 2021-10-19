import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from './../../firebase/utils';

import Logo from './../../assets/phoenix-logo.png';

import './styles.scss';

const Header = (props) => {
  console.log(props, ' props');
  const { currentUser } = props;
  console.log(currentUser, 'current user');

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="phoenix logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
