import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  signOutUserStart,
  signOutUserSuccess,
} from '../../redux/User/user-actions';
import { selectCartItemsCount } from './../../redux/Cart/cart-selectors'

import Logo from './../../assets/phoenix-logo.png';
import './styles.scss';

// const mapState = ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapState = (state) => {
  return {
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
  };
};

const Header = (props) => {
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="phoenix logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/cart">Your Cart ({totalNumCartItems})</Link>
            </li>

            {currentUser && [
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li>
                <span onClick={() => signOut()}> LogOut</span>
              </li>,
            ]}
          </ul>

          {!currentUser && [
            <li>
              <Link to="/registration">Register</Link>
            </li>,
            <li>
              <Link to="/login">Login</Link>
            </li>,
          ]}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

// ({user}) = destructure from redux rootReducer state object

export default Header;
