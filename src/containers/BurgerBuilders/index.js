import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummery from '../../components/Burger/OrderSummery';
import axios from '../../axios-order.js';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { connect } from 'react-redux';
import burgerBuilderActions from '../../actions/burgerBuilderActions.js';


class BurgerBuilder extends Component {
    state = {
     showModal: false,
}

componentDidMount(){
    this.props.initIngredients()
}

//check for order button to be active or not
updatePurchaseState = (ingredients) =>{
    const ingredientsCopy = { ...ingredients };
    const ingredientsSum = Object.keys(ingredientsCopy)
    .map(igkey => {
        return ingredients[igkey]
    }).reduce((acc, el) => {
        return acc + el
    }, 0)
    return ingredientsSum <= 0 
}

// addIngredients = (type) => {
// const { ingredients, totalPrice } = this.state;
// const oldIngredientCount = ingredients[type];
// const newIngredientCount = oldIngredientCount + 1;
// const updateIngredients = { ...ingredients };
// updateIngredients[type] = newIngredientCount;
// const addedPrice = typePrice[type];
// const newPrice = totalPrice + addedPrice;
// this.setState({totalPrice: newPrice, ingredients: updateIngredients})
// this.updatePurchaseState(updateIngredients)
// } 

// removeIngredients = (type) => {
//     const { ingredients, totalPrice } = this.state;
//     const oldIngredientCount = ingredients[type];
//     const newIngredientCount = oldIngredientCount - 1;
//     const updateIngredients = { ...ingredients };
//     updateIngredients[type] = newIngredientCount;
//     const removedPrice = typePrice[type];
//     const newPrice = totalPrice - removedPrice;
//     if(ingredients[type] !== 0){
//     this.setState({totalPrice: newPrice, ingredients: updateIngredients}) 
//     }
//     this.updatePurchaseState(updateIngredients)
// }

showModalHandler = () => {   
    console.log(this.props.isToken, 'ssssssssssssssssssssss');
    if(this.props.isToken){
      this.setState({showModal: true, loading: false})     
    }else{
      this.props.history.push('/auth')
    }
}

closeModalHandler = () => {   
 this.setState({showModal: false})
}

continueOrderHandler = () => {
    this.props.history.push('/checkout')
}



    render() {
        const { showModal } = this.state;
        const { onIngredientAdded, onIngredientRemoved, ings, price, error, loading } = this.props;
        const disabledIngredient = { ...ings };
        for (let key in disabledIngredient){
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }

        
    let burger = error? <p>no ingredients loaded</p>: <Spinner />;
        let orderSummery = null;
        if(ings){
            burger=(
                <Aux>
                <Burger ingredients={ings} />
                  <BuildControls 
                  added={onIngredientAdded}
                  removed={onIngredientRemoved}
                  disabled={disabledIngredient}
                  price={price}
                  purchasable={this.updatePurchaseState(ings)}
                  showModalHandler={this.showModalHandler} />
                  </Aux>
            )
            orderSummery =  <OrderSummery 
            ingredients={ings}
            continueOrder={this.continueOrderHandler}
            close={this.closeModalHandler}
            price={price} />

        } 
        
        if(loading){
            orderSummery = <Spinner />
        }

        return(
                <Aux>
                    <Modal 
                    show={showModal} 
                    close ={this.closeModalHandler}>
                        {orderSummery}
                    </Modal>
                  {burger}
                </Aux>  
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        loading: state.burgerBuilder.loading,
        isToken: state.auth.token !== null
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        initIngredients:()=>dispatch(burgerBuilderActions.initIngredients())
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));