import { combineReducers } from "redux";
import burgerBuilder from './burgerBuilder';
import orders from './order';
import auth from './auth';

export default combineReducers({
   burgerBuilder,
   orders,
   auth
});