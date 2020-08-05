import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducer';

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
