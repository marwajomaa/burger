import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
`

const Line = styled.div`
    height: 3px;
    width: 90%;
    background-color: white
`

const SideBarToggle = ({clicked}) => (
    <Wrapper onClick={clicked}>
        <Line />
        <Line />
        <Line />
    </Wrapper>
    )

export default SideBarToggle;