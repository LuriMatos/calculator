import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <li className='navbar-icons'>
            <a 
            href={props.href} 
            className='icon-button'
            target="_blank"
            rel="noopener noreferrer">
                {props.icon}
            </a>
        </li>
    );
}

export default NavItem;