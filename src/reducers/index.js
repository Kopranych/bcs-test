import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import instruments from './instruments';

export default combineReducers({
  routing: routerReducer,
  instruments,
});
