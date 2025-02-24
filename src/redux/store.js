import { createStore, applyMiddleware } from 'redux';
import rootReducer from '~/reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// include: reducers, middleware(Redux#, Redux Saga, redux-dev,..)
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;




