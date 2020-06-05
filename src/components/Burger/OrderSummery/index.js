import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button'

class OrderSummery extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.ingredients !== this.props.ingredients
  }
  render(){
   const {ingredients, continueOrder, close, price} = this.props;
    const ingredientSummary = Object.keys(ingredients).map(igkey =>{
       return <li key={igkey}><span>{igkey}</span><span>{ingredients[igkey]}</span></li>
    })
    return(
        <Aux>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients</p>
          <p>Total Price: {price}</p>
          <ul>
             { ingredientSummary }
          </ul>
          <p>Continue to checkout</p>
          <Button 
          type='success'
          label='continue'
          clicked={continueOrder}
          />
          <Button 
          type='danger'
          label='cancel'
          clicked={close}
          />
        </Aux>
    )
}
}

export default OrderSummery;