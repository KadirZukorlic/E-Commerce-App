import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";

import Logo from "./../../assets/phoenix-logo.png";

import "./styles.scss";

// const mapState = ({ user }) => ({
//   currentUser: user.currentUser,
// });


const mapState = ({user}) => {
  return {
    currentUser: user.currentUser
  }
}

const Header = (props) => {
  const { currentUser } = useSelector(mapState);

  console.log(currentUser, '------------TRENUTNI USER')
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
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}> LogOut</span>
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

// ({user}) = destructure from redux rootReducer state object

export default Header;
