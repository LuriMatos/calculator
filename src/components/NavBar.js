import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-sel">
                <NavItem icon=':D'/>
            </ul>
        </nav>
    );
}

export default NavBar;