import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styled from 'styled-components';

const Logo = styled.div`
    background-color: white;
    padding: 8px;
    height:${props => props.height? props.height: '100%'};
    box-sizing: border-box;
    border-radius: 5px;
`
const Img = styled.img`
    height: 100%;
`

const logo = (props) => (
    <Logo {...props}>
        <Img src={burgerLogo} alt="MyBurger" />
    </Logo>
);

export default logo;