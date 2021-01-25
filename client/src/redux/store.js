import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import LogRocket from 'logrocket';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
  rootReducer,
  composeWithDevTools(
    // other store enhancers if any
    applyMiddleware(thunk, LogRocket.reduxMiddleware())
  )
);
