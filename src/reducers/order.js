import { FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED, LOADING } from '../actionTypes';


const initState = {
    orders: null,
    loading: true,
    error: false
}

const reducer = (state = initState, action) =>{
    const { payload, type } = action;

    switch(type){
        case FETCH_ORDERS_SUCCESS:
        return {
            ...state,
            orders: payload,
            loading: false
        }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_ORDERS_FAILED:
            return{
                ...state,
                orders: null,
                error: true,
                loading: false
            }

            default:
                return state

    }
}

export default reducer;