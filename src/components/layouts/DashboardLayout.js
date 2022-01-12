import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user-actions';
import { checkUserIsAdmin } from '../../Utils';

import Header from './../Header';
import VerticalNav from './../VerticalNav';
import Footer from './../Footer';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const DashBoardLayout = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const [isCurrentUserAdmin, setIsCurrentUserAdmin] = useState(false)



  useEffect(() => {
    const isAdmin = checkUserIsAdmin(currentUser);
    setIsCurrentUserAdmin(isAdmin);

  }, [currentUser])

  console.log(isCurrentUserAdmin, 'is admin')

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">
                  Home
                </Link>
              </li>
             {isCurrentUserAdmin && (<li>
                <Link to="/all-orders">
                  Orders
                </Link>
              </li>)}
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;