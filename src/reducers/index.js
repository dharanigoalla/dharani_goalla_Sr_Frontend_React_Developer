import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import cart from './cart';
import headermenu from './headermenu';

export default combineReducers({
  user,
  runtime,
  cart,
  headermenu,
});
