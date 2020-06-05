import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: block,
  margin: 1rem auto;

`

const Input = ({type, value, name, placeholder, handleClick}) => {
    return(
    < InputWrapper>
    <input type={type} value={value} name={name} placeholder={placeholder} onChange={handleClick} />
    </InputWrapper>
    )
}

export default Input;