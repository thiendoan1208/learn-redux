import { createStore } from 'redux';
import rootReducer from '~/reducer/rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

// include: reducers, middleware(Redux#, Redux Saga, redux-dev,..)
const store = createStore(
    rootReducer, 
    composeWithDevTools()
);

export default store;
