import React from 'react';
import { NavigationItemLi, Link } from './style'


const navigationItems = (props) => (
    <NavigationItemLi>
        <li ><Link href={props.link}>{props.children}</Link></li>
    </NavigationItemLi>
);

export default navigationItems;