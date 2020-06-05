import React, { Component } from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop';
import Aux from '../../../hoc/Aux';

const ModalDiv = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 20%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    visibility: ${props => props.show? 'visible' : 'hidden'};
@media (min-width: 600px) {
    .Modal {
        width: 500px;
        left: calc(50% - 250px);
    }
}
`
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children

    }
    render(){
    const { show, close, children } = this.props;
        return(
    <Aux>
    <Backdrop show={show} clicked={close}/>
    <ModalDiv show={show}>
        {children}
    </ModalDiv>
 </Aux>
        )
    }
}

export default Modal;