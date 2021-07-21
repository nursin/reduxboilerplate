import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// data
import { Greeting } from './greeting';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Greeting: Greeting
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};