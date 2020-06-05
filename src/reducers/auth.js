import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from '../actionTypes';

const initialState = {
    token: localStorage.access_token || null,
    userId: localStorage.user_id,
    loading: false,
    error: ''
}

const reducer = ( state=initialState, action) => { 
    const {type, userId, error } = action; 
    const idToken = localStorage.getItem('access_token') || null;
    const user = localStorage.getItem('user_id') || null;
  
    
  switch(type){
      case AUTH_START:
          return {
              ...state,
              loading: true,
              error: false
          }
      case AUTH_SUCCESS:
          return {
              ...state,
              token: idToken,
              userId: user,
              loading: false,
              error: false
          }
      case AUTH_FAIL:
          return {
              ...state,
              loading: false,
              error
          }
      case LOGOUT:
          return {
            ...state,
            token: null,
            userId: null
          }
          default:
              return state

  }
}

export default reducer