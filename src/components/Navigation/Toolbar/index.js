import React from 'react';

import { Header, LogoDiv, Nav } from './style'
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import SideBarToggle from '../Sidebar/sideBarToggle.js';

const toolbar = ( {toggleMenu} ) => (
    <Header>
        <SideBarToggle clicked={toggleMenu}/>
        <LogoDiv>
            <Logo />
        </LogoDiv>
        <Nav>
            <NavigationItems />
        </Nav>
    </Header>
);

export default toolbar;