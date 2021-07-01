import React from 'react';
import { ReactComponent as LinkedIn } from '../img/linkedin.svg';
import { ReactComponent as GitHub } from '../img/github.svg';

const NavItem = (props) => {
    return (
        <li className='navbar-icons'>
            <a href='' className='icon-button'>
                {props.icon}
            </a>
        </li>
    );
}

export default NavItem;