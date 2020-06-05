import { ADD_INGREDIENT, REMOVE_INGREDIENT, INIT_INGREDIENTS, LOADING, FETCH_INGREDIENTS_FAILED } from './../actionTypes';
import axios from '../axios-order'

const addIngredient = (name) => {
    return {
      type: ADD_INGREDIENT,
      payload: name
    }
}

const removeIngredient = (name) => {
    return {
      type: REMOVE_INGREDIENT,
      payload: name
    }
}

const initIngredients = () => async dispatch => {
  try {
    const res = await axios.get('https://react-burger-4bf76.firebaseio.com/ingredients.json');
    const data = res.data; 
    if(data){
      dispatch({
        type: INIT_INGREDIENTS,
        payload: data,
      });
  } else {
    dispatch({
      type: LOADING,
      payload: null,
  })
}
} catch(err){
  dispatch({
    type: FETCH_INGREDIENTS_FAILED,
    payload: err.message
  })
  
}
  
  
}

export default { addIngredient, removeIngredient, initIngredients }