import React from 'react';
import NavItem from './NavItem';
import './NavBar.css';
import { ReactComponent as LinkedIn } from '../../img/linkedin.svg';
import { ReactComponent as GitHub } from '../../img/github.svg';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-icon">
                <NavItem 
                icon={<LinkedIn />}
                href='https://www.linkedin.com/in/lucasmatosdl/' />
                <NavItem 
                icon={<GitHub />}
                href='https://github.com/LuriMatos' />
            </ul>
        </nav>
    );
}

export default NavBar;