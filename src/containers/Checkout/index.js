import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/index.js';
import ContactData from './ContactData';


class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        const { ings, price} = this.props;
        if(!ings){
            return <p>loading...</p>
        }
        return (
            <div>
                <CheckoutSummary 
                ingredients={ings}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                render={(props)=>(<ContactData ingredients={ings} price={price} {...props} />)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice 
    }
}

export default connect(mapStateToProps)(Checkout);