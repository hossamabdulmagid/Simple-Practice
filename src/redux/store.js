import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'

import rootReducers from './rootReducer';

const middleWares = [thunk];

export const store = createStore(rootReducers, applyMiddleware(...middleWares));


