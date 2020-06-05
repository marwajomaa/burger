import React from 'react';
import { Burger } from './style';
import BurgerIngredient from './BurgerIngredient';

const burger = ({ingredients}) => { 
    let transformedIngredients = Object.keys(ingredients)
    .map(igkey =>{
        return [...Array(ingredients[igkey])].map((_, i) =>{
            return <BurgerIngredient key={igkey + i} type={igkey} />
        })
        //flat the array
    }).reduce((acc, el) => {
        return acc.concat(el)
    }, [])
     
   if(transformedIngredients.length === 0) {
       transformedIngredients = <p>pls start adding ingredients</p>
   }
    
    return(
        <Burger>
            <BurgerIngredient type='bread-top' />
             {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </Burger>
    )
}

export default burger;