import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import styled from 'styled-components';
import BackDrop from '../../UI/Backdrop';
import Aux from '../../../hoc/Aux';

const SideBar = styled.div`
 position: fixed;
 width: 280px;
 max-width: 70%;
 height: 100%;
 left: 0;
 top: 0;
 z-index: 200;
 background-color: white;
 padding: 32px 16px;
 box-sizing: border-box;
 transition: transform .35 ease-out;
 visibility: ${props => props.open? 'visible' : 'hidden'};
 @media(min-width: 500px) {
     display: none
 }

`

const sideBar = ({closeSideBar, open}) => {
    
    return (
        <Aux>
            <BackDrop show={open} clicked={closeSideBar}/>
     <SideBar open={open}>
       <Logo height='100px' />
       <nav>
           <NavigationItems />
       </nav>
     </SideBar>
     </Aux>
    )
}

export default sideBar;