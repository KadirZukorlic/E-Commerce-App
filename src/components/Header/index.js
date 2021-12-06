import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUserStart, signOutUserSuccess } from "../../redux/User/user-actions";
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
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(signOutUserStart())
  }

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
             <Link to="/">
               Home
             </Link>
           </li>
           <li>
             <Link to="/search">
               Search
             </Link>
           </li>
         </ul>
       </nav>


        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => signOut()}> LogOut</span>
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
