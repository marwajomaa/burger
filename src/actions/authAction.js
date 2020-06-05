import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from '../actionTypes';
import axios from 'axios';

const authStart = () => {
    return{
        type: AUTH_START
    }
}

const logout = () => {
    localStorage.removeItem('access_token')
    return {
        type: LOGOUT
    }
}

const checkAuthTimeOut = expiresInTime=>dispatch=>{
        setTimeout(() => {
         dispatch(logout());
        }, expiresInTime * 1000)
} 

const auth = (email, password, isSignUp) => dispatch =>{
    console.log('hhh')
    dispatch(authStart());
    const authData ={
        email,
        password,
        returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDr5OawgJKh0O567-s9cv_T6dYHTAjmPXA';
    if(!isSignUp){
        console.log(isSignUp)
        url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDr5OawgJKh0O567-s9cv_T6dYHTAjmPXA';
    }
    axios.post(url, authData)
    .then(res => {
        console.log(res.data.idToken)
        localStorage.setItem('access_token', res.data.idToken);
        localStorage.setItem('user_id', res.data.localId);
   dispatch(authSuccess(res.data.idToken, res.data.localId)) ;
//    dispatch(checkAuthTimeOut(res.data.expiresIn))
    }).catch(error => {
        dispatch(authFail(error.message))
    })

}

const authSuccess = (token, userId) =>{
  return{
      type: AUTH_SUCCESS,
      token,
      userId
  }
}

const authFail = (error) =>{
  return{
      type: AUTH_FAIL,
      error: error.message
  }
}



export { authStart, auth, authSuccess, authFail, logout, checkAuthTimeOut}