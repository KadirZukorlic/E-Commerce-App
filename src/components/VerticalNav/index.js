import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const VerticalNav = ({children}) => {
    const {currentUser} = useSelector(mapState)

    return (
        <div className="verticalNav">

            <div className="menu">
                {children}
            </div>
            
        </div>
    )
}

export default VerticalNav;
