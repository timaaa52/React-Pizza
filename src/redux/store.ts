import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import { cartReducer, filterReducer, pizzasReducer } from './reducers';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
    // cart: cartReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//@ts-ignore
window.store = store