import React from 'react';
import styled, { css } from 'styled-components';

const sharedStyles = css`
  position: relative;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: 0;
  width: ${props => props.width && props.width};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => props.disabled && !props.loading && 0.3};
  font-weight: 500;
  font-size: 1.125rem;
  margin: ${props => props.margin? props.margin: '20px'};
  &:hover::after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: none;
  }
  &:active::after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: gray;
    box-shadow: none;
  }
`;

const successStyle = css`
 background: none;
 color: green
`

const dangerStyle = css`
 background: none;
 color: red
`

const primaryBtn = css`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;

&:hover, &:active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
}

&:disabled {
    background-color: #C7C6C6;
    border: 1px solid #ccc;
    color: #888888;
}

&:not(:disabled) {
    animation: enable 0.3s linear;
}

@keyframes enable {
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
`

const secondaryBtn = css`
display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  `

const StyledButton = styled.button`
  ${sharedStyles};
  ${props => props.type === 'success' && successStyle};
  ${props => props.type === 'danger' && dangerStyle};
  ${props => props.type === 'primary' && primaryBtn};
  ${props => props.type === 'secondary' && secondaryBtn};

`;

const Button = ({ label, clicked, ...props }) => {
  return (
    <StyledButton 
    aria-label={label}
    onClick={clicked} {...props}  >
      {label}
    </StyledButton>
  );
};

export default Button;