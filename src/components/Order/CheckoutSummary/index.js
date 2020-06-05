import React from 'react';

import Burger from '../../Burger';
import Button from '../../UI/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = ({ingredients, checkoutCancel, checkoutContinue}) => {
    console.log(ingredients, 'oooooooooooooooooh');
    
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={ingredients}/>
            </div>
            <Button 
                type="danger"
                label='CANCEL'
                clicked={checkoutCancel}
                />
            <Button 
                type="success"
                label='CONTINUE'
                clicked={checkoutContinue} />
        </div>
    );
}

export default checkoutSummary;