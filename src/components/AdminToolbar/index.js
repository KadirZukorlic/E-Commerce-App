import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const AdminToolbar = props => {
    return (
        <div className="adminToolbar">
            <ul>
                <li>
                   <Link to="/admin">My Admin</Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminToolbar;