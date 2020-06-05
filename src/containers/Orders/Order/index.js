import React from 'react';
import styled from 'styled-components';

const OrderDiv = styled.div`
 width: 100%;
 padding: 5px;
 margin: 10px auto;
 border: 1px solid #ccc;
`

const Order = ({ings, price}) => {
  
    let transformedOrder = [];
    for(let ingredientName in ings){
      transformedOrder.push({
        name: ingredientName,
        amount: ings[ingredientName]
      })
    }

    const ingredientsShow = transformedOrder.map(ingredient => {
      return <span
      style={{margin: '5px', padding: '3px', border: '1px solid #eaecee'}}
       key={ingredient.name}>{ingredient.name}({ingredient.amount})</span>
    })
    // const transformedIng = Object.keys(ingredients)
    // .map(key =>{
    //         return <p key={key}>{key}<span>{ingredients[key]}</span></p>
    // })
    
    return(
  <OrderDiv>
      <p>{ingredientsShow}</p>
      <p>price<strong>${parseFloat(price).toFixed(2)}</strong></p>
  </OrderDiv>
    )
}

export default Order;