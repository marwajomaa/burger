import { FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED, LOADING } from '../actionTypes';
import axios from '../axios-order'

const fetchOrders = (token, userId) => async dispatch => {
 try{
  const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="'+ userId + '"';
  const res = await axios.get('/orders.json' + queryParams)
  const data = res.data;
  if(data){
      let orders = [];
      for(let key in data){
          orders.push({
              ...data[key],
              id: key
            })
      }
      dispatch({
          type: FETCH_ORDERS_SUCCESS,
          payload: orders
      })
  } else {
      dispatch({
          type: LOADING,
      })
  }
 }
 catch(err){
 console.log(err)
 dispatch({
     type: FETCH_ORDERS_FAILED
 })
 }
}

export default { fetchOrders }