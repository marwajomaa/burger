import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationItemsUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  @media (min-width: 500px) {
          flex-flow: row;
}
  
`

export const NavigationItem = styled(Link)`
 color: #8f5c2c;
 text-decoration: none;
 width: 100%;
 box-sizing: border-box;
 display: block;
 &:hover, &:active {
    color: #40A4C8;
 };
 &:hover, &:active {
    background-color: #8F5C2C;
    border-bottom: 4px solid #40A4C8;
    color: white;
 };
 @media (min-width: 500px) {
   color: white;
   height: 100%;
   padding: 16px 10px;
   border-bottom: 4px solid transparent;
}

`
