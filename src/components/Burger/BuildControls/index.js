import React from 'react';
import { BuildControlsDiv } from './style';
import { Redirect } from 'react-router';
import BuildControl from './BuildControl';
import { connect } from 'react-redux';
import Button from '../../UI/Button';

const controls = [
    {label: 'salad', type: 'salad'},
    {label: 'bacon', type: 'bacon'},
    {label: 'cheese', type: 'cheese'},
    {label: 'meat', type: 'meat'},
]

const BuildControls = ({added, removed, disabled, price, purchasable, showModalHandler, token }) =>{
    console.log(added, removed);
    return(
    <BuildControlsDiv>    
        <p>Total price: {price.toFixed(2)}$</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>added(ctrl.type)}
            removed={()=>removed(ctrl.type)}
            disabled={disabled[ctrl.type]} />
        ))}
        <Button
        type='primary'
        label= {token?'Order Now': 'signup to order'}
        disabled={purchasable}
        clicked={showModalHandler} /> 
    </BuildControlsDiv>
    )
};

const mapStateToProps = state => {
    return{
        token: state.auth.token
    }

}
export default connect(mapStateToProps)(BuildControls);