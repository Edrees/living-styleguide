import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, composeWithDevTools());
/* eslint-enable */

export default store;
