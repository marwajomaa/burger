import { ADD_INGREDIENT, REMOVE_INGREDIENT,  INIT_INGREDIENTS, LOADING, FETCH_INGREDIENTS_FAILED } from '../actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 5, 
    loading: false,
    error: false
}

const ingredientsPrices = {
    salad: .4,
    bacon: .3,
    cheese: .5,
    meat: .5
}

const reducer = ( state=initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case ADD_INGREDIENT:
        return {
            ...state,
            ingredients : 
            {
                ...state.ingredients,
                [payload]: state.ingredients[payload] + 1
            },
            totalPrice: state.totalPrice + ingredientsPrices[payload]
        };
       case REMOVE_INGREDIENT:
        return {
            ...state,
            ingredients : {
                ...state.ingredients,
                [payload]: state.ingredients[payload] - 1
            },
            totalPrice: state.totalPrice - ingredientsPrices[payload]
        }
       case INIT_INGREDIENTS:
           return {
             ...state,
             ingredients: payload,
             loading: false, 
             error: false
           }
        case LOADING: 
         return {
             ...state,
             ingredients: null,
             loading: true,
         }
         case FETCH_INGREDIENTS_FAILED:
             return {
                ...state,
                ingredients:null,
                loading: false,
                error: true
             }
        default:
            return state
    };
} 

export default reducer;