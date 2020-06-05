import styled from 'styled-components';

export const Burger = styled.div`
 width: 100%;
 margin: 78px auto auto auto;
 height: 250px;
 overflow: scroll;
 text-align: center;
 font-weight: bold;
 font-size: 1.2rem;

 @media(min-width: 1000px) and (min-height: 700px){
     width: 700px;
     height: 600px
 };

 @media(min-width: 500px) and (min-height: 401px){
     width: 450px;
     height: 400px
 }
`